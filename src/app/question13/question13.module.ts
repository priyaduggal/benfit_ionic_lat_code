import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question13PageRoutingModule } from './question13-routing.module';

import { Question13Page } from './question13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question13PageRoutingModule
  ],
  declarations: [Question13Page]
})
export class Question13PageModule {}
