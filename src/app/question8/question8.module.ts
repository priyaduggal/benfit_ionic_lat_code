import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question8PageRoutingModule } from './question8-routing.module';

import { Question8Page } from './question8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question8PageRoutingModule
  ],
  declarations: [Question8Page]
})
export class Question8PageModule {}
