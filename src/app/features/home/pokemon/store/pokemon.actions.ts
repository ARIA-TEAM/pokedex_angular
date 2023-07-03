import { createActionGroup, emptyProps, props } from '@ngrx/store'

import { PokemonModel } from '@pokemon/models/pokemon.model'

export const PokemonActions = createActionGroup({
  source: 'Pokemon',
  events: {
    'Get all': emptyProps(),
    'Get all success': props<{ list: PokemonModel[] }>(),
    'Get detail': props<{ pokemonName: PokemonModel['name'] }>(),
    'Get detail success': props<{ detail: PokemonModel }>()
  }
})
