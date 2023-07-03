import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { PokemonActions } from '@app/features/home/pokemon/store/pokemon.actions'
import { Store } from '@ngrx/store'
import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'
import { PokemonState, selectList } from '@pokemon/store/pokemon.reducer'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject()

  public list: PokemonModel[] = []
  public filteredPokemonList: PokemonModel[] = []
  public favouritePokemonList: PokemonModel[] = []
  public showFavourites = false

  public searchControl = new FormControl('')

  constructor(private store: Store<PokemonState>) {
    this.store.dispatch(PokemonActions.getAll())
  }

  public ngOnInit(): void {
    this._subscribeToGetAll()
    this._subscribeToSearchChanges()
  }

  private _subscribeToGetAll(): void {
    this.store
      .select(selectList)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((list: PokemonModel[]) => {
        if (!list) return

        this.list = [...this.list, ...list]
        this.filteredPokemonList = [...this.list]
      })
  }

  private _subscribeToSearchChanges(): void {
    this.searchControl.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe((value: string | null) => {
      !value
        ? (this.filteredPokemonList = [...this.list])
        : (this.filteredPokemonList = this.filteredPokemonList.filter((pokemon: PokemonModel) =>
            pokemon.name.toLowerCase().includes(value.toLowerCase())
          ))
    })
  }

  public onScroll(): void {
    this._subscribeToGetAll()
  }

  public onUpdateFavouritesList(pokemonName: string): void {
    this.list = this.list.map((pokemon: PokemonModel) => {
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
    this.filteredPokemonList = [...this.list]
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
