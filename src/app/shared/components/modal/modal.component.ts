import { Component, ElementRef, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() id?: string

  private element: any

  public isOpen = false

  constructor(private modalService: ModalService, private elementRef: ElementRef) {
    this.element = elementRef.nativeElement
  }

  public ngOnInit(): void {
    this.modalService.add(this)

    document.body.appendChild(this.element)

    this.element.addEventListener('click', (elementRef: any) => {
      if (elementRef.target.className === 'app-modal') this.close()
    })
  }

  public open(): void {
    this.element.style.display = 'block'
    document.body.classList.add('modal--open')
    this.isOpen = true
  }

  public close(): void {
    this.element.style.display = 'none'
    document.body.classList.remove('modal--open')
    this.isOpen = false
  }

  public ngOnDestroy(): void {
    this.modalService.remove(this)
    this.element.remove()
  }
}
