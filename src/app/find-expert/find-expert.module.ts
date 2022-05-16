import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindExpertPageRoutingModule } from './find-expert-routing.module';

import { FindExpertPage } from './find-expert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindExpertPageRoutingModule
  ],
  declarations: [FindExpertPage]
})
export class FindExpertPageModule {}
