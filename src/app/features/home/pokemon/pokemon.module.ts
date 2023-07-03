import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ContentComponent } from '@pokemon/components/detail-modal/content/content.component'
import { DetailModalComponent } from '@pokemon/components/detail-modal/detail-modal.component'
import { FooterComponent } from '@pokemon/components/detail-modal/footer/footer.component'
import { HeaderComponent } from '@pokemon/components/detail-modal/header/header.component'
import { FiltersComponent } from '@pokemon/components/filters/filters.component'
import { ListItemComponent } from '@pokemon/components/list/list-item/list-item.component'
import { ListComponent } from '@pokemon/components/list/list.component'
import { SearchComponent } from '@pokemon/components/search/search.component'
import { PokemonRoutingModule } from '@pokemon/pokemon-routing.module'
import { PokemonComponent } from '@pokemon/pokemon.component'
import { PokemonService } from '@pokemon/services/pokemon.service'
import { PokemonEffects } from '@pokemon/store/pokemon.effects'
import { pokemonFeatureKey, pokemonReducer } from '@pokemon/store/pokemon.reducer'
import { SharedModule } from '@shared/shared.module'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

@NgModule({
  declarations: [
    PokemonComponent,
    ListComponent,
    ListItemComponent,
    SearchComponent,
    FiltersComponent,
    DetailModalComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    StoreModule.forFeature(pokemonFeatureKey, pokemonReducer),
    EffectsModule.forFeature([PokemonEffects])
  ],
  providers: [PokemonService]
})
export class PokemonModule {}
