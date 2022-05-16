import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question12PageRoutingModule } from './question12-routing.module';

import { Question12Page } from './question12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question12PageRoutingModule
  ],
  declarations: [Question12Page]
})
export class Question12PageModule {}
