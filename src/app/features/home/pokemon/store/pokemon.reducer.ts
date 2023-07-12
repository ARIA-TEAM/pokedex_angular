import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'
import { PokemonActions } from '@app/features/home/pokemon/store/pokemon.actions'
import { createReducer, createSelector, on } from '@ngrx/store'

export const pokemonFeatureKey = 'pokemons'

export interface PokemonState {
  searchList: PokemonModel[] | []
  list: PokemonModel[] | []
  favouriteList: PokemonModel[] | []
  detail: PokemonModel | null
}

export const initialState: PokemonState = {
  searchList: [],
  list: [],
  favouriteList: [],
  detail: null
}

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.getAllSuccess, (state: PokemonState, { list }) => ({
    ...state,
    searchList: [...state.searchList, ...list]
  })),
  on(PokemonActions.getPageSuccess, (state: PokemonState, { list }) => {
    const listWithFavouriteAttribute = list.map((item) => ({
      ...item,
      favourite: false
    }))

    return {
      ...state,
      list: [...state.list, ...listWithFavouriteAttribute]
    }
  }),
  on(PokemonActions.getDetailSuccess, (state: PokemonState, { detail }) => ({
    ...state,
    detail: { ...detail }
  })),
  on(PokemonActions.markAsFavourite, (state: PokemonState, { pokemonToMarkAsFavourite }) => {
    const updatedPokemons = state.list.map((pokemon: PokemonModel) =>
      pokemon.name === pokemonToMarkAsFavourite.name ? { ...pokemon, favourite: true } : pokemon
    )

    const favouriteList = [...state.favouriteList]
    const pokemonIndex = favouriteList.findIndex((pokemon: PokemonModel) => pokemon.name === pokemon.name)

    if (pokemonIndex === -1) favouriteList.push({ ...pokemonToMarkAsFavourite, favourite: true })

    return {
      ...state,
      list: [...updatedPokemons],
      favouriteList
    }
  }),
  on(PokemonActions.markAsNoFavourite, (state: PokemonState, { pokemonName }) => {
    const updatedPokemons = state.list.map((pokemon: PokemonModel) =>
      pokemon.name === pokemonName ? ({ ...pokemon, favourite: false }) : pokemon
    )

    const favouriteList = state.favouriteList.filter((pokemon: PokemonModel) => pokemon.name !== pokemonName)

    return {
      ...state,
      list: [...updatedPokemons],
      favouriteList
    }
  })
)

export const selectPokemonFeature = (state: any) => state[pokemonFeatureKey]

export const selectSearchList = createSelector(selectPokemonFeature, (state: PokemonState) => state.searchList)
export const selectList = createSelector(selectPokemonFeature, (state: PokemonState) => state.list)
export const selectFavouritesList = createSelector(selectPokemonFeature, (state: PokemonState) => state.favouriteList)
export const selectDetail = createSelector(selectPokemonFeature, (state: PokemonState) => state.detail)
