import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question11PageRoutingModule } from './question11-routing.module';

import { Question11Page } from './question11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question11PageRoutingModule
  ],
  declarations: [Question11Page]
})
export class Question11PageModule {}
