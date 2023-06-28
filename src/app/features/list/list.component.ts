import { Component } from '@angular/core';

interface PokemonModel {
  id: number;
  name: string;
  favourite?: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public pokemonList: PokemonModel[] = [
    {
      id: 35,
      name: "clefairy",
      favourite: false
    },
    {
      id: 36,
      name: "bulbasaur",
      favourite: false
    },
    {
      id: 37,
      name: "ivysaur",
      favourite: false
    },
    {
      id: 38,
      name: "venasaur",
      favourite: false
    }
  ];
  public pokemonFavouriteList: PokemonModel[] = [];

  public showFavourites = false;

  public onAddToFavourites(id: number): void {
    this.pokemonList = this.pokemonList.map((pokemon: PokemonModel) => {
      if (pokemon.id === id) {
        this.pokemonFavouriteList.push(pokemon);
        pokemon.favourite = !pokemon.favourite;
      }

      return pokemon;
    });
  }
}
