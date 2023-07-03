import { Component } from '@angular/core'
import { ModalService } from '@shared/services/modal.service'
import { PokemonState } from '../../../store/pokemon.reducer'
import { Store } from '@ngrx/store'
import { PokemonActions } from '../../../store/pokemon.actions'

@Component({
  selector: 'app-detail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private modalService: ModalService, private store: Store<PokemonState>) {}

  public onClose(): void {
    // this.store.dispatch(PokemonActions.getDetailSuccess({ detail: null }))
    this.modalService.close('detail')
  }
}
