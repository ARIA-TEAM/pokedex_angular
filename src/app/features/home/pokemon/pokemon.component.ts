import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { PokemonActions } from '@app/features/home/pokemon/store/pokemon.actions'
import { Store } from '@ngrx/store'
import { PokemonModel } from '@pokemon/models/pokemon.model'
import { selectPokemonList } from '@pokemon/store/pokemon.reducer'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject()

  public pokemonList: PokemonModel[] = []
  public filteredPokemonList: PokemonModel[] = []
  public favouritePokemonList: PokemonModel[] = []
  public showFavourites = false

  public searchControl = new FormControl('')

  constructor(private pokemonStore: Store) {
    this.pokemonStore.dispatch(PokemonActions.getAll())
  }

  public ngOnInit(): void {
    this._subscribeToGetAllPokemon()
    this._subscribeToSearchChanges()
  }

  private _subscribeToGetAllPokemon(): void {
    this.pokemonStore
      .select(selectPokemonList)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((pokemonList: PokemonModel[]) => {
        if (!pokemonList) return

        this.pokemonList = [...this.pokemonList, ...pokemonList]
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

  public onScroll(): void {
    this._subscribeToGetAllPokemon()
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
