import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeService } from './youtube.service';

import { AppComponent } from './app.component';
import { ClipListComponent } from './clips/clip-list/clip-list.component';
import { ClipItemComponent } from './clips/clip-item/clip-item.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ClipListComponent,
    ClipItemComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
