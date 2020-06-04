import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsanotherPageRoutingModule } from './clientsanother-routing.module';

import { ClientsanotherPage } from './clientsanother.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsanotherPageRoutingModule
  ],
  declarations: [ClientsanotherPage]
})
export class ClientsanotherPageModule {}
