import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { ActivatedRoute} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-clip-details',
  templateUrl: './clip-details.component.html',
  styleUrl: './clip-details.component.css'
})
export class ClipDetailsComponent implements OnInit{

  videoId: string;
  videoName: string;
  videoLink: string;
  videoThumbnail: string;

  safeVideoLink: SafeResourceUrl;

  constructor(private videoService: VideoService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoId = this.route.snapshot.params['id'];

    this.videoService.getVideo(this.videoId).subscribe(video => {
      this.videoName = video.name;
      this.videoThumbnail = video.thumbnail;
      const embedLink = video.link.replace('watch?v=', 'embed/') + '?autoplay=1' + '&controls=1';
      this.safeVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
    });
  }

}
