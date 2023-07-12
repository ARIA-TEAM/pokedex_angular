import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PokemonModel } from '@pokemon/models/pokemon.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() filteredPokemonList: PokemonModel[] = []
  @Input() favouritePokemonList: PokemonModel[] = []
  @Input() showFavourites = false

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel>()
  @Output() onScrollEmitter = new EventEmitter()

  public onUpdateFavouritesList(pokemon: PokemonModel): void {
    this.onUpdateFavouritesListEmitter.emit(pokemon)
  }

  public onScroll(): void {
    this.onScrollEmitter.emit()
  }
}
