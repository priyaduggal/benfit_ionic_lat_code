import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertsignupPageRoutingModule } from './expertsignup-routing.module';

import { ExpertsignupPage } from './expertsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertsignupPageRoutingModule
  ],
  declarations: [ExpertsignupPage]
})
export class ExpertsignupPageModule {}
