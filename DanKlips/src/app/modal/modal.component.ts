import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() addVideo = new EventEmitter<string>();

  videoLink: string;

  shareVideo(): void {
    this.addVideo.emit(this.videoLink);
    this.videoLink = '';
  }

  closeModal(): void {
    this.videoLink = '';
  }
}