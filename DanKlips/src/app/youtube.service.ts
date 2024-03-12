import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyDu3LTYJJIU8UnkgdGVAsrLLpV2_UsLB8w';
  VideoName: string;
  VideoDescription: string;
  VideoThumbnail: string;
  VideoLink: string;

  constructor(public http: HttpClient) { }

  getVideoId(link: string) {
    let videoId = link.split('v=')[1];
    let ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
  }

  setVideoData(videoId: string) {
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' + this.apiKey)
      .pipe(map((res) => {
        this.VideoName = res['items'][0].snippet.title;
        this.VideoDescription = res['items'][0].snippet.description;
        this.VideoThumbnail = res['items'][0].snippet.thumbnails.maxres.url;
        this.VideoLink = 'https://www.youtube.com/watch?v=' + videoId;
      }));
  }

  getVideoName() {
    return this.VideoName;
  }

  getVideoDescription() {
    return this.VideoDescription;
  }

  getVideoThumbnail() {
    return this.VideoThumbnail;
  }

  getVideoLink() {
    return this.VideoLink;
  }
  
}