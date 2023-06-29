import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { PokemonModel } from '@core/models/pokemon.model'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private _destroyed$ = new Subject()

  public pokemonList: PokemonModel[] = [
    {
      id: 35,
      name: 'clefairy',
      favourite: false
    },
    {
      id: 36,
      name: 'bulbasaur',
      favourite: false
    },
    {
      id: 37,
      name: 'ivysaur',
      favourite: false
    },
    {
      id: 38,
      name: 'venasaur',
      favourite: false
    }
  ]
  public filteredPokemonList: PokemonModel[] = [...this.pokemonList]
  public favouritePokemonList: PokemonModel[] = []
  public showFavourites = false

  public searchControl = new FormControl('')

  public ngOnInit(): void {
    this._subscribeToSearchChanges()
  }

  private _subscribeToSearchChanges(): void {
    this.searchControl.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe((value: string | null) => {
      !value
        ? (this.filteredPokemonList = [...this.pokemonList])
        : (this.filteredPokemonList = this.filteredPokemonList.filter((pokemon: PokemonModel) =>
            pokemon.name.toLowerCase().includes(value.toLowerCase())
          ))
    })
  }

  public onUpdateFavouritesList(pokemonId: number): void {
    this.pokemonList = this.pokemonList.map((pokemon: PokemonModel) => {
      if (pokemon.id === pokemonId) {
        const favouritePokemonIndex = this._findFavouritePokemonIndex(pokemon.id)

        favouritePokemonIndex === -1 ? this.favouritePokemonList.push(pokemon) : this.favouritePokemonList.splice(favouritePokemonIndex, 1)

        pokemon.favourite = !pokemon.favourite
      }

      return pokemon
    })
  }

  private _findFavouritePokemonIndex(pokemonId: number): number {
    return this.favouritePokemonList.findIndex((pokemon: PokemonModel) => pokemon.id === pokemonId)
  }

  public onShowAll(): void {
    this.filteredPokemonList = []
    this.filteredPokemonList = [...this.pokemonList]
    this.showFavourites = false
  }

  public onShowFavourites(): void {
    this.filteredPokemonList = []
    this.filteredPokemonList = [...this.favouritePokemonList]
    this.showFavourites = true
  }

  public ngOnDestroy(): void {
    this._destroyed$.next(null)
    this._destroyed$.complete()
  }
}
