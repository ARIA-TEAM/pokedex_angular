import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { ListRoutingModule } from './list-routing.module'
import { ListComponent } from './list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, SharedModule]
})
export class ListModule {}
