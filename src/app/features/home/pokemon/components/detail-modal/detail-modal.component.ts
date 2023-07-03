import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subject, takeUntil } from 'rxjs'

import { PokemonModel } from '../../models/pokemon.model'
import { PokemonState, selectDetail } from '../../store/pokemon.reducer'

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit, OnDestroy {
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

  public ngOnDestroy(): void {}
}
