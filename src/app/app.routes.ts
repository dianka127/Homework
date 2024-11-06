import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'first',
    loadChildren: () =>
      import('./first-component/first-component.module').then(module => module.FirstComponentModule),
  },
  {
    path: 'header',
    loadChildren: () =>
      import('./header/header.module').then(module => module.HeaderModule),
  },
];



