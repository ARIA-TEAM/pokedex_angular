import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PokemonModel } from '@pokemon/models/pokemon.model'

@Component({
  selector: 'app-detail-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() favourite: PokemonModel['favourite']

  @Output() onUpdateFavouritesListEmitter = new EventEmitter<PokemonModel>()

  public onUpdateFavouritesList(): void {
    this.favourite = !this.favourite

    this.onUpdateFavouritesListEmitter.emit()
  }
}
