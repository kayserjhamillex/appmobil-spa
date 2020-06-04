import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerPage } from './worker.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: WorkerPage
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'customersday',
    loadChildren: () => import('./customersday/customersday.module').then( m => m.CustomersdayPageModule)
  },
  {
    path: 'clientsanother',
    loadChildren: () => import('./clientsanother/clientsanother.module').then( m => m.ClientsanotherPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerPageRoutingModule {}
