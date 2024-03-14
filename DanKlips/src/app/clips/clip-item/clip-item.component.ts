import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-clip-item',
  templateUrl: './clip-item.component.html',
  styleUrls: ['./clip-item.component.css']
})
export class ClipItemComponent implements OnInit {

  @Input() videoName: string;
  @Input() videoThumbnail: string;
  @Input() videoLink: string;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

  deleteVideo(): void {
    this.videoService.deleteVideo(this.videoLink);
  }
}