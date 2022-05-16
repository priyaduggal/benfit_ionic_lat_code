import { NgModule,Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Question2PageRoutingModule } from './question2-routing.module';
import { Question2Page } from './question2.page';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,SharedModule,
    Question2PageRoutingModule
  ],
  declarations: [Question2Page]
})
export class Question2PageModule {}
