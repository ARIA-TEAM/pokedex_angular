import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '@app/shared/shared.module'
import { WelcomeRoutingModule } from '@welcome/welcome-routing.module'
import { WelcomeComponent } from '@welcome/welcome.component'

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, WelcomeRoutingModule, SharedModule]
})
export class WelcomeModule {}
