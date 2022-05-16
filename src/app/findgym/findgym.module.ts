import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindgymPageRoutingModule } from './findgym-routing.module';

import { FindgymPage } from './findgym.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindgymPageRoutingModule
  ],
  declarations: [FindgymPage]
})
export class FindgymPageModule {}
