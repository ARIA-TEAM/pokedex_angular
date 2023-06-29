import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PokemonModel } from '@core/models/pokemon.model'
import { ModalService } from '@shared/services/modal.service'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() pokemon: PokemonModel | null = null

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel['id']>()

  constructor(protected modalService: ModalService) {}

  public onOpenModal(): void {
    console.log('open modal')
    this.modalService.open('detail')
  }

  public onUpdateFavouritesList(pokemonId: PokemonModel['id'] | undefined): void {
    if (!pokemonId) return

    this.onUpdateFavouritesListEmitter.emit(pokemonId)
  }
}
