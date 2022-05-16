import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseexpertPageRoutingModule } from './chooseexpert-routing.module';

import { ChooseexpertPage } from './chooseexpert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseexpertPageRoutingModule
  ],
  declarations: [ChooseexpertPage]
})
export class ChooseexpertPageModule {}
