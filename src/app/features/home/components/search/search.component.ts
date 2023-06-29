import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { PokemonModel } from '@app/features/home/models/pokemon.model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchControl: FormControl = new FormControl('')
}
