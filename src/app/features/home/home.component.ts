import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { PokemonModel } from '@app/features/home/models/pokemon.model'
import { PokemonService } from '@home/services/pokemon.service'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private _destroyed$ = new Subject()

  public pokemonList: PokemonModel[] = []
  public filteredPokemonList: PokemonModel[] = []
  public favouritePokemonList: PokemonModel[] = []
  public showFavourites = false

  public searchControl = new FormControl('')

  constructor(private pokemonService: PokemonService) {}

  public ngOnInit(): void {
    this._subscribeToGetAllPokemons()
    this._subscribeToSearchChanges()
  }

  private _subscribeToGetAllPokemons(): void {
    this.pokemonService
      .getAll()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((pokemonList: PokemonModel[]) => {
        this.pokemonList = pokemonList
        this.filteredPokemonList = [...this.pokemonList]
      })
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

  public onUpdateFavouritesList(pokemonName: string): void {
    this.pokemonList = this.pokemonList.map((pokemon: PokemonModel) => {
      if (pokemon.name === pokemonName) {
        const favouritePokemonIndex = this._findFavouritePokemonIndex(pokemon.name)

        favouritePokemonIndex === -1 ? this.favouritePokemonList.push(pokemon) : this.favouritePokemonList.splice(favouritePokemonIndex, 1)

        pokemon.favourite = !pokemon.favourite
      }

      return pokemon
    })
  }

  private _findFavouritePokemonIndex(pokemonName: string): number {
    return this.favouritePokemonList.findIndex((pokemon: PokemonModel) => pokemon.name === pokemonName)
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
