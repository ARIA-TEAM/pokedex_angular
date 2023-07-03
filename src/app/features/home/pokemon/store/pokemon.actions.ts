import { createActionGroup, emptyProps, props } from '@ngrx/store'

import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'

export const PokemonActions = createActionGroup({
  source: 'Pokemon',
  events: {
    'Get all': emptyProps(),
    'Get all success': props<{ pokemonList: PokemonModel[] }>()
  }
})
