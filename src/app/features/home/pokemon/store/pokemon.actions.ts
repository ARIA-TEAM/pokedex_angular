import { createActionGroup, emptyProps, props } from '@ngrx/store'

import { PokemonModel } from '@pokemon/models/pokemon.model'

export const PokemonActions = createActionGroup({
  source: 'Pokemon',
  events: {
    'Get page': emptyProps(),
    'Get page success': props<{ list: PokemonModel[] }>(),
    'Get all': emptyProps(),
    'Get all success': props<{ list: PokemonModel[] }>(),
    'Get detail': props<{ pokemonName: PokemonModel['name'] }>(),
    'Get detail success': props<{ detail: PokemonModel }>(),
    'Mark as favourite': props<{ pokemonToMarkAsFavourite: PokemonModel }>(),
    'Mark as no favourite': props<{ pokemonName: PokemonModel['name'] }>(),
  }
})
