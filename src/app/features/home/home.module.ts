import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component'

@NgModule({
  declarations: [HomeComponent, ListComponent, ListItemComponent, SearchComponent, FiltersComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule]
})
export class HomeModule {}
