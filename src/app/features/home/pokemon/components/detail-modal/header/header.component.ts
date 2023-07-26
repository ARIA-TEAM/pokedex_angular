import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonState } from '@pokemon/store/pokemon.reducer';
import { ModalService } from '@app/shared/services/modal.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-detail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  @Input() frontDefault: string | undefined = undefined

  constructor(private modalService: ModalService, private store: Store<PokemonState>) {}

  public onClose(): void {
    this.modalService.close('pokemon-detail')
  }

  public ngOnDestroy(): void {
    this.frontDefault = undefined
  }
}
