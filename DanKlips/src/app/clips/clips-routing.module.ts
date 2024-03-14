import { Routes } from '@angular/router';
import { ClipListComponent } from './clip-list/clip-list.component';
import { ClipDetailsComponent } from './clip-details/clip-details.component';

export const ClipsRoutes: Routes = [
  {
    path: 'clips',
    redirectTo: 'clips/list',
  },
  {
    path: 'clips/list',
    component: ClipListComponent
  },
  {
    path: 'clips/details/:id',
    component: ClipDetailsComponent
  }

];
