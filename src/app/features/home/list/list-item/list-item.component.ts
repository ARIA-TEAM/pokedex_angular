import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonModel } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() pokemon: PokemonModel | null = null

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel['id']>()

  public onUpdateFavouritesList(pokemonId: PokemonModel['id'] | undefined): void {
    if (!pokemonId) return

    this.onUpdateFavouritesListEmitter.emit(pokemonId)
  }
}
