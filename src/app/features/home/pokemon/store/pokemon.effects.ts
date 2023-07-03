import { Injectable } from '@angular/core'
import { PokemonService } from '@app/features/home/pokemon/services/pokemon.service'
import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'
import { PokemonActions } from '@app/features/home/pokemon/store/pokemon.actions'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, of } from 'rxjs'

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions, private pokemonService: PokemonService) {}

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.getAll),
      exhaustMap(() =>
        this.pokemonService.getAll().pipe(
          map((pokemonList: PokemonModel[]) => PokemonActions.getAllSuccess({ pokemonList })),
          catchError(() => of(PokemonActions.getAll))
        )
      )
    )
  )
}
