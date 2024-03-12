import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'app-clip-item',
  templateUrl: './clip-item.component.html',
  styleUrls: ['./clip-item.component.css']
})
export class ClipItemComponent implements OnInit {
  videoName: string;
  videoUrl: string = 'https://www.youtube.com/watch?v=PqGnP9pfZZU';

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    const videoId = this.youtubeService.getVideoId(this.videoUrl);
    this.youtubeService.getVideoName(videoId).subscribe(name => this.videoName = name);
  }
}