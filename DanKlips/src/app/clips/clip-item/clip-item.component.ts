import { Component, Input } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-clip-item',
  templateUrl: './clip-item.component.html',
  styleUrls: ['./clip-item.component.css']
})
export class ClipItemComponent {

  @Input() videoName: string;
  @Input() videoThumbnail: string;
  @Input() videoLink: string;
  @Input() videoId: string;

  showModal: boolean = false;

  constructor(private videoService: VideoService) { }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  deleteVideo(): void {
    this.videoService.deleteVideo(this.videoLink);
  }
}