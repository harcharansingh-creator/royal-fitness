import { Routes } from '@angular/router';

import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '404',
    component: NotFound
  },

  {
    path: '**',
    redirectTo: '404'
  }
];