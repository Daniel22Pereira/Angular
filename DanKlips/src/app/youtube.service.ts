import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyDu3LTYJJIU8UnkgdGVAsrLLpV2_UsLB8w';

  constructor(public http: HttpClient) { }

  getVideoId(link: string) {
    let videoId = link.split('v=')[1];
    let ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
  }

  getVideoName(videoId: string) {
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' + this.apiKey)
      .pipe(map((response: any) => {
        return response.items[0].snippet.title;
      }));
  }
}