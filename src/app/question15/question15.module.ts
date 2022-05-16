import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question15PageRoutingModule } from './question15-routing.module';

import { Question15Page } from './question15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question15PageRoutingModule
  ],
  declarations: [Question15Page]
})
export class Question15PageModule {}
