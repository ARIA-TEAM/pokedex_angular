import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { ListRoutingModule } from './list-routing.module'
import { ListComponent } from './list.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, SharedModule, ReactiveFormsModule]
})
export class ListModule {}
