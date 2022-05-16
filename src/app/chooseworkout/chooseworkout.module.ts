import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseworkoutPageRoutingModule } from './chooseworkout-routing.module';

import { ChooseworkoutPage } from './chooseworkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseworkoutPageRoutingModule
  ],
  declarations: [ChooseworkoutPage]
})
export class ChooseworkoutPageModule {}
