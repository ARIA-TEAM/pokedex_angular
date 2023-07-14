import { Component, OnDestroy, OnInit } from '@angular/core'
import { LoaderService } from '@app/core/services/loader/loader.service'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject()

  public isLoading: boolean = false

  constructor(private loaderService: LoaderService) {}

  public ngOnInit(): void {
    this._subscribeToIsLoading()
  }

  private _subscribeToIsLoading(): void {
    this.loaderService
      .getIsLoading()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((isLoading: boolean) => {
        this.isLoading = isLoading
      })
  }

  public ngOnDestroy(): void {
    this._destroyed$.next(false)
    this._destroyed$.complete()
  }
}
