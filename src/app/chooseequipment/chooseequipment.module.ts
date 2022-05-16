import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseequipmentPageRoutingModule } from './chooseequipment-routing.module';

import { ChooseequipmentPage } from './chooseequipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseequipmentPageRoutingModule
  ],
  declarations: [ChooseequipmentPage]
})
export class ChooseequipmentPageModule {}
