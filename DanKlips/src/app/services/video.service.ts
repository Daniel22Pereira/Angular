import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Clip } from '../clips/clip.model';
import { BehaviorSubject } from 'rxjs';

const supabase = createClient(environment.supabase.url, environment.supabase.key);

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videosUpdated = new BehaviorSubject<void>(null);

  get videosUpdated$() {
    return this.videosUpdated.asObservable();
  }

  addVideo(videoLink: string, videoName: string, videoThumbnail: string): void {
    const newClip = { link: videoLink, name: videoName, thumbnail: videoThumbnail, addedAt: new Date().toISOString() };
    supabase.from('videos').insert([newClip]).then(() => {
      this.videosUpdated.next();
    });
  }

  getVideos() {
    return from(supabase.from('videos').select('*')).pipe(
      map(response => response.data as Clip[])
    );
  }

  deleteVideo(link: string) {
    supabase.from('videos').delete().match({ link }).then(() => {
      this.videosUpdated.next();
    });
  }
}