import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { PokemonModel } from '@pokemon/models/pokemon.model'
import { PokemonActions } from '@pokemon/store/pokemon.actions'
import { Store } from '@ngrx/store'
import { PokemonState, selectFavouritesList, selectList, selectSearchList } from '@pokemon/store/pokemon.reducer'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject()
  private _searchList: PokemonModel[] = []
  private _list: PokemonModel[] = []

  public filteredPokemonList: PokemonModel[] = []
  public favouritePokemonList: PokemonModel[] = []
  public showFavourites = false
  public searchControl = new FormControl('')

  constructor(private store: Store<PokemonState>) {
    this.store.dispatch(PokemonActions.getAll())
    this.store.dispatch(PokemonActions.getPage())
  }

  public ngOnInit(): void {
    this._subscribeToGetAll()
    this._subscribeToGetPage()
    this._subscribeToFavoritesList()
    this._subscribeToSearchChanges()
  }

  private _subscribeToGetAll(): void {
    this.store
      .select(selectSearchList)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((list: PokemonModel[]) => {
        if (!list) return

        this._searchList = [...list]
      })
  }

  private _subscribeToGetPage(): void {
    this.store
      .select(selectList)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((list: PokemonModel[]) => {
        if (!list) return

        this._list = [...list]
        this.filteredPokemonList = [...this._list]
      })
  }

  private _subscribeToFavoritesList(): void {
    this.store
      .select(selectFavouritesList)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((list: PokemonModel[]) => {
        if (!list) return

        this.favouritePokemonList = [...list]
      })
  }

  private _subscribeToSearchChanges(): void {
    this.searchControl.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe((value: string | null) => {
      !value
        ? (this.filteredPokemonList = [...this._list])
        : (this.filteredPokemonList = this._searchList.filter((pokemon: PokemonModel) =>
            pokemon.name.toLowerCase().includes(value.toLowerCase())
          ))
    })
  }

  public onScroll(): void {
    if (this.searchControl.value) return

    this.store.dispatch(PokemonActions.getPage())
  }

  public onUpdateFavouritesList(pokemon: PokemonModel): void {
    !pokemon.favourite
      ? this.store.dispatch(PokemonActions.markAsFavourite({ pokemonToMarkAsFavourite: pokemon }))
      : this.store.dispatch(PokemonActions.markAsNoFavourite({ pokemonName: pokemon.name }))
  }

  public onShowAll(): void {
    this.filteredPokemonList = []
    this.filteredPokemonList = [...this._list]
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
