import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PokemonModel } from '@app/features/home/pokemon/models/pokemon.model'
import { Store } from '@ngrx/store'
import { ModalService } from '@shared/services/modal.service'
import { PokemonState } from '../../../store/pokemon.reducer'
import { PokemonActions } from '../../../store/pokemon.actions'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() pokemon: PokemonModel | null = null

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel>()

  constructor(protected modalService: ModalService, private store: Store<PokemonState>) {}

  public onOpenModal(pokemonName: PokemonModel['name'] | undefined): void {
    if (!pokemonName) return

    this.store.dispatch(PokemonActions.getDetail({ pokemonName }))
    this.modalService.open('detail')
  }

  public onUpdateFavouritesList(pokemon: PokemonModel | undefined): void {
    if (!pokemon) return

    this.onUpdateFavouritesListEmitter.emit(pokemon)
  }
}
