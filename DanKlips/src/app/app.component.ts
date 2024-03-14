import { Component } from '@angular/core';
import { VideoService } from './services/video.service';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DanKlips';
  showModal = false;

  constructor(private videoService: VideoService, private youtubeService: YoutubeService) {}

  onAddVideo(videoLink: string): void {
    this.showModal = false;
    const videoId = this.youtubeService.getVideoId(videoLink);
    this.youtubeService.setVideoData(videoId).subscribe(() => {
      const videoName = this.youtubeService.getVideoName();
      const videoThumbnail = this.youtubeService.getVideoThumbnail();
      this.videoService.addVideo(videoId, videoLink, videoName, videoThumbnail);
    });
  }
}