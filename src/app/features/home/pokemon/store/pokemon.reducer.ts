import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'
import { PokemonActions } from '@app/features/home/pokemon/store/pokemon.actions'
import { createReducer, createSelector, on } from '@ngrx/store'

export const pokemonFeatureKey = 'pokemons'

export interface PokemonState {
  readonly list: PokemonModel[] | []
  readonly detail: PokemonModel | null
}

export const initialState: PokemonState = {
  list: [],
  detail: null
}

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.getAllSuccess, (state: PokemonState, { list }) => ({
    ...state,
    list: [...state.list, ...list]
  })),
  on(PokemonActions.getDetailSuccess, (state: PokemonState, { detail }) => ({
    ...state,
    detail: { ...detail }
  }))
)

export const selectPokemonFeature = (state: any) => state[pokemonFeatureKey]

export const selectList = createSelector(selectPokemonFeature, (state: PokemonState) => state.list)
export const selectDetail = createSelector(selectPokemonFeature, (state: PokemonState) => state.detail)
