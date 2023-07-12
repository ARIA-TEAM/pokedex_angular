import { Component, Input } from '@angular/core';
import { PokemonModel } from '@pokemon/models/pokemon.model';

@Component({
  selector: 'app-detail-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() name: PokemonModel['name'] | undefined = ''
  @Input() weight: PokemonModel['weight'] | undefined = 0
  @Input() height: PokemonModel['height'] | undefined = 0
  @Input() types: PokemonModel['types'] | undefined = []

  public getWeight(): string {
    if (!this.weight) return ''

    return `${+this.weight / 10} kg`
  }

  public getHeight(): string {
    if (!this.height) return ''

    return `${+this.height / 10} mts`
  }

  public getTypes(): string {
    if (!this.types) return ''

    let types: string[] = []

    this.types.forEach((type) => types.push(type.type.name))

    return types.join(' & ')
  }
}
