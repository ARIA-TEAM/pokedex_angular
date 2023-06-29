import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PokemonModel } from '@core/models/pokemon.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() pokemonList: PokemonModel[] = []
  @Input() filteredPokemonList: PokemonModel[] = []
  @Input() favouritePokemonList: PokemonModel[] = []
  @Input() showFavourites = false

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel['id']>()

  public onUpdateFavouritesList(pokemonId: PokemonModel['id']): void {
    this.onUpdateFavouritesListEmitter.emit(pokemonId)
  }
}
