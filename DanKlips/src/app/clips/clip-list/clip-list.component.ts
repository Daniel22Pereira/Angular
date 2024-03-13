import { Component, OnInit } from '@angular/core';
import { Clip } from '../clip.model';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-clip-list',
  templateUrl: './clip-list.component.html',
  styleUrls: ['./clip-list.component.css']
})
export class ClipListComponent implements OnInit {
  clipList: Clip[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(videos => {
      this.clipList = videos;
    });

    this.videoService.videosUpdated$.subscribe(() => {
      this.videoService.getVideos().subscribe(videos => {
        this.clipList = videos;
      });
    });
  }
}