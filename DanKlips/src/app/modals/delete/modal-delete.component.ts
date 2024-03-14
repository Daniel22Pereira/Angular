import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css'
})
export class ModalDeleteComponent {

  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() deleteVideo: EventEmitter<any> = new EventEmitter();

  close(): void {
    this.closeModal.emit();
  }

  delete(): void {
    this.deleteVideo.emit();
  }

}
