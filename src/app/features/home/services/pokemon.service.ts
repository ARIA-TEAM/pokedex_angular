import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { PokemonListModel, PokemonModel } from '@home/models/pokemon.model'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { HomeModule } from '@home/home.module'

@Injectable({
  providedIn: HomeModule
})
export class PokemonService {
  private _nextPage: string = ''
  private _baseApiUrl: string = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<PokemonModel[]> {
    return this.httpClient.get<PokemonListModel>(this._nextPage ? this._nextPage : this._baseApiUrl).pipe(
      map((response: PokemonListModel) => {
        this._nextPage = response.next

        return response.results
      }),
      catchError((error: any) => {
        throw new Error(error)
      })
    )
  }
}