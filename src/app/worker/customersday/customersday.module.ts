import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersdayPageRoutingModule } from './customersday-routing.module';

import { CustomersdayPage } from './customersday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersdayPageRoutingModule
  ],
  declarations: [CustomersdayPage]
})
export class CustomersdayPageModule {}
