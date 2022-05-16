import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchdulesessionPageRoutingModule } from './schdulesession-routing.module';

import { SchdulesessionPage } from './schdulesession.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchdulesessionPageRoutingModule
  ],
  declarations: [SchdulesessionPage]
})
export class SchdulesessionPageModule {}
