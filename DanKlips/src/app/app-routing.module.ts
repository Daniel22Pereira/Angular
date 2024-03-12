import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClipsRoutes} from './clips/clips-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: 'clips/list', pathMatch: 'full' },
  ...ClipsRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
