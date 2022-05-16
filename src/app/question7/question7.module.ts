import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question7PageRoutingModule } from './question7-routing.module';

import { Question7Page } from './question7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question7PageRoutingModule
  ],
  declarations: [Question7Page]
})
export class Question7PageModule {}
