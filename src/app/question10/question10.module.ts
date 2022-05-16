import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question10PageRoutingModule } from './question10-routing.module';

import { Question10Page } from './question10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question10PageRoutingModule
  ],
  declarations: [Question10Page]
})
export class Question10PageModule {}
