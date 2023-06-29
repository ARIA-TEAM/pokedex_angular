import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PokemonModel } from '@app/features/home/models/pokemon.model'

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

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel['name']>()

  public onUpdateFavouritesList(pokemonName: PokemonModel['name']): void {
    this.onUpdateFavouritesListEmitter.emit(pokemonName)
  }
}
