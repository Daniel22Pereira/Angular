import { Routes } from '@angular/router';
import { ClipListComponent } from './clip-list/clip-list.component';

export const ClipsRoutes: Routes = [
  {
    path: 'clips',
    redirectTo: 'clips/list',
  },
  {
    path: 'clips/list',
    component: ClipListComponent
  },

];
