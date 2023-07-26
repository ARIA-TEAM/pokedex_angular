import { Injectable } from '@angular/core'

import { ModalComponent } from '../components/modal/modal.component'

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: ModalComponent[] = []

  public add(modalToAdd: ModalComponent): void {
    this.modals = []

    if (!modalToAdd.id || this._findModal({ modalToFind: modalToAdd })) {
      throw new Error('modal must have a unique id attribute')
    }

    this.modals.push(modalToAdd)
  }

  private _findModal(options: { modalToFind?: ModalComponent; modalId?: string }): ModalComponent | undefined {
    return this.modals.find(
      (modal: ModalComponent) =>
        (options.modalToFind && modal.id === options.modalToFind.id) || (options.modalId && modal.id === options.modalId)
    )
  }

  public remove(modalToRemove: ModalComponent): void {
    this.modals = this.modals.filter((modal: ModalComponent) => modal === modalToRemove)
  }

  public open(modalId: string): void {
    const modal = this._findModal({ modalId: modalId })

    if (!modal) throw new Error(`Modal '${modalId}' not found`)

    modal.open()
  }

  public close(modalId: string): void {
    const modal = this._findModal({ modalId: modalId })
    modal?.close()
  }
}
