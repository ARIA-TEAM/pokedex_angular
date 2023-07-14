import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeRoutingModule } from '@home/home-routing.module'
import { HomeComponent } from '@home/home.component'
import { SharedModule } from '@app/shared/shared.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
