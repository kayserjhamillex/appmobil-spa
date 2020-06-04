import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersdayPage } from './customersday.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersdayPageRoutingModule {}
