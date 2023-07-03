import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list: PokemonModel[] = []
  @Input() filteredPokemonList: PokemonModel[] = []
  @Input() favouritePokemonList: PokemonModel[] = []
  @Input() showFavourites = false

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel['name']>()
  @Output() onScrollEmitter = new EventEmitter()

  public onUpdateFavouritesList(pokemonName: PokemonModel['name']): void {
    this.onUpdateFavouritesListEmitter.emit(pokemonName)
  }

  public onScroll(): void {
    this.onScrollEmitter.emit()
  }
}
