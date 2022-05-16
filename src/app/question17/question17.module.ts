import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question17PageRoutingModule } from './question17-routing.module';

import { Question17Page } from './question17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question17PageRoutingModule
  ],
  declarations: [Question17Page]
})
export class Question17PageModule {}
