import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonState } from '@pokemon/store/pokemon.reducer';
import { ModalService } from '@shared/services/modal.service';

@Component({
  selector: 'app-detail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  @Input() frontDefault: string | undefined = undefined

  constructor(private modalService: ModalService, private store: Store<PokemonState>) {}

  public onClose(): void {
    this.modalService.close('detail')
  }

  public ngOnDestroy(): void {
    this.frontDefault = undefined
  }
}
