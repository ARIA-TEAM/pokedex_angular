import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'
import { ModalService } from '@shared/services/modal.service'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() pokemon: PokemonModel | null = null

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel['name']>()

  constructor(protected modalService: ModalService) {}

  public onOpenModal(): void {
    this.modalService.open('detail')
  }

  public onUpdateFavouritesList(pokemonName: PokemonModel['name'] | undefined): void {
    if (!pokemonName) return

    this.onUpdateFavouritesListEmitter.emit(pokemonName)
  }
}
