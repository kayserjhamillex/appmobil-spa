import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AuthPage
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
