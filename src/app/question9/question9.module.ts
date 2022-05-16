import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question9PageRoutingModule } from './question9-routing.module';

import { Question9Page } from './question9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question9PageRoutingModule
  ],
  declarations: [Question9Page]
})
export class Question9PageModule {}
