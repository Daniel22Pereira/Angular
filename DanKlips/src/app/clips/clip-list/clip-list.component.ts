import { Component } from '@angular/core';
import { Clip } from '../clip.model';
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'app-clip-list',
  templateUrl: './clip-list.component.html',
  styleUrl: './clip-list.component.css',
})
export class ClipListComponent {
  clipList: Clip[] = [];

  videoUrl: string;
  videoName: string;
  videoThumbnail: string;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.updateClipList();
  }

  addClip(link: string): void {
    const newClip = new Clip(link);
    this.clipList.push(newClip);
    this.updateClipData(newClip);
  }

  private updateClipList(): void {
    this.clipList.forEach((clip) => {
      this.updateClipData(clip);
    });
  }

  private updateClipData(clip: Clip): void {
    const videoId = this.youtubeService.getVideoId(clip.link);
    this.youtubeService.setVideoData(videoId).subscribe(() => {
      clip.name = this.youtubeService.getVideoName();
      clip.thumbnail = this.youtubeService.getVideoThumbnail();
    });
  }
}