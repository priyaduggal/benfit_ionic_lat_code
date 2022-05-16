import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicepairPageRoutingModule } from './devicepair-routing.module';

import { DevicepairPage } from './devicepair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicepairPageRoutingModule
  ],
  declarations: [DevicepairPage]
})
export class DevicepairPageModule {}
