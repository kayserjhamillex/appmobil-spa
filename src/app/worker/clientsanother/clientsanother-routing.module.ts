import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsanotherPage } from './clientsanother.page';

const routes: Routes = [
  {
    path: '',
    component: ClientsanotherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsanotherPageRoutingModule {}
