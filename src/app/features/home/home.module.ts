import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ContentComponent } from '@home/components/detail-modal/content/content.component'
import { DetailModalComponent } from '@home/components/detail-modal/detail-modal.component'
import { FooterComponent } from '@home/components/detail-modal/footer/footer.component'
import { HeaderComponent } from '@home/components/detail-modal/header/header.component'
import { FiltersComponent } from '@home/components/filters/filters.component'
import { ListItemComponent } from '@home/components/list/list-item/list-item.component'
import { ListComponent } from '@home/components/list/list.component'
import { SearchComponent } from '@home/components/search/search.component'
import { HomeRoutingModule } from '@home/home-routing.module'
import { HomeComponent } from '@home/home.component'
import { SharedModule } from 'src/shared/shared.module'

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    ListItemComponent,
    SearchComponent,
    FiltersComponent,
    DetailModalComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule]
})
export class HomeModule {}
