export interface PokemonListModel {
  count: number
  next: string
  previous: any
  results: PokemonModel[]
}

export interface PokemonModel {
  id: number
  name: string
  url: string
  favourite?: boolean
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Ability[]
  forms: Form[]
  game_indices: Index[]
  held_items: HeldItem[]
  location_area_encounters: string
  moves: Mfe[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  past_types: PastType[]
}

export interface Ability {
  is_hidden: boolean
  slot: number
  ability: Ability
}

export interface Form {
  name: string
  url: string
}

export interface Index {
  game_index: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface HeldItem {
  item: Item
  version_details: VersionDetail[]
}

export interface Item {
  name: string
  url: string
}

export interface VersionDetail {
  rarity: number
  version: Version
}

export interface Mfe {
  move: Move
  version_group_details: VersionGroupDetail[]
}

export interface Move {
  name: string
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number
  version_group: Version
  move_learn_method: Move
}

export interface Species {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
  other: Other
  versions: Record<string, Object>
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  "official-artwork": OfficialArtwork
}

export interface DreamWorld {
  front_default: string
  front_female: any
}

export interface Home {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface OfficialArtwork {
  front_default: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export interface Stat2 {
  name: string
  url: string
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}

export interface PastType {
  generation: Generation
  types: Type3[]
}

export interface Generation {
  name: string
  url: string
}

export interface Type3 {
  slot: number
  type: Type2
}
