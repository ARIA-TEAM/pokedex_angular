export interface PokemonListModel {
  count: number
  next: string
  previous: any
  results: PokemonModel[]
}

export interface PokemonModel {
  name: string
  url: string
  favourite?: boolean
}