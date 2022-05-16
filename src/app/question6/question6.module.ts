import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question6PageRoutingModule } from './question6-routing.module';

import { Question6Page } from './question6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question6PageRoutingModule
  ],
  declarations: [Question6Page]
})
export class Question6PageModule {}
