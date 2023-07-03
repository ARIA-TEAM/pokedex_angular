import { createReducer, createSelector, on } from '@ngrx/store'

import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'
import { PokemonActions } from '@app/features/home/pokemon/store/pokemon.actions'

export const pokemonFeatureKey = 'pokemons'

export interface PokemonState {
  readonly pokemonList: PokemonModel[] | []
}

export const initialState: PokemonState = {
  pokemonList: []
}

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.getAllSuccess, (state: PokemonState, { pokemonList }) => ({
    ...state,
    pokemonList: [...state.pokemonList, ...pokemonList]
  }))
)

export const selectPokemonFeature = (state: any) => state[pokemonFeatureKey]

export const selectPokemonList = createSelector(selectPokemonFeature, (state: PokemonState) => state.pokemonList)
