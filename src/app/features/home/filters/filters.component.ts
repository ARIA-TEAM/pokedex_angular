import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() showFavourites = false

  @Output() onShowAllEmitter = new EventEmitter<boolean>()
  @Output() onShowFavouritesEmitter = new EventEmitter<boolean>()

  public onShowAll(): void {
    this.onShowAllEmitter.emit(false)
  }

  public onShowFavourites(): void {
    this.onShowFavouritesEmitter.emit(true)
  }
}
