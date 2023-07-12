import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { Store } from '@ngrx/store'
import { PokemonModel } from '@pokemon/models/pokemon.model'
import { PokemonState, selectDetail } from '@pokemon/store/pokemon.reducer'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit, OnDestroy {
  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel>()

  private _destroyed$ = new Subject()

  public detail: PokemonModel | null = null

  constructor(private store: Store<PokemonState>) {}

  public ngOnInit(): void {
    this.store
      .select(selectDetail)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((detail: PokemonModel | null) => {
        if (!detail) return

        this.detail = detail
      })
  }

  public getFrontDefault(): string | undefined {
    return this.detail?.sprites.other['official-artwork'].front_default
  }

  public onUpdateFavouritesList(): void {
    this.onUpdateFavouritesListEmitter.emit(this.detail ?? undefined)
  }

  public ngOnDestroy(): void {
    this._destroyed$.next(null)
    this._destroyed$.complete()
  }
}
