import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertsettingPageRoutingModule } from './expertsetting-routing.module';

import { ExpertsettingPage } from './expertsetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertsettingPageRoutingModule
  ],
  declarations: [ExpertsettingPage]
})
export class ExpertsettingPageModule {}
