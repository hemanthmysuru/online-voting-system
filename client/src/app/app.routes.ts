import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'public',
    loadComponent: () => import('../app/public/public').then((m) => m.Public),
    children: [
      // {
      //   path: 'home',
      //   loadComponent: () => import('../app/public/home/home').then((m) => m.Home),
      // },
      {
        path: 'login',
        loadComponent: () => import('../app/public/login/login').then((m) => m.Login),
      },
    ],
  },

  {
    path: 'user',
    loadComponent: () => import('../app/user/user').then((m) => m.User),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('../app/user/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'vote',
        loadComponent: () => import('../app/user/vote/vote').then((m) => m.Vote),
      },
    ],
  },

  {
    path: '',
    redirectTo: 'public/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'public/login',
  },
];
