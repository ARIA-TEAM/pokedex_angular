import { Component } from '@angular/core'
import { ModalService } from '@shared/services/modal.service'

@Component({
  selector: 'app-detail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private modalService: ModalService) {}

  public onClose(): void {
    this.modalService.close('detail')
  }
}
