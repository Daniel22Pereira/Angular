import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClipListComponent } from './clips/clip-list/clip-list.component';
import { ClipItemComponent } from './clips/clip-item/clip-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ClipListComponent,
    ClipItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
