import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module'

import { DetailModalComponent } from './detail-modal/detail-modal.component'
import { FiltersComponent } from './filters/filters.component'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { ListItemComponent } from './list/list-item/list-item.component'
import { ListComponent } from './list/list.component'
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './detail-modal/header/header.component';
import { ContentComponent } from './detail-modal/content/content.component';
import { FooterComponent } from './detail-modal/footer/footer.component'

@NgModule({
  declarations: [HomeComponent, ListComponent, ListItemComponent, SearchComponent, FiltersComponent, DetailModalComponent, HeaderComponent, ContentComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
