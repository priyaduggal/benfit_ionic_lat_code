import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosegenderPageRoutingModule } from './choosegender-routing.module';

import { ChoosegenderPage } from './choosegender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosegenderPageRoutingModule
  ],
  declarations: [ChoosegenderPage]
})
export class ChoosegenderPageModule {}
