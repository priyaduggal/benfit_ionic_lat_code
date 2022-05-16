import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question14PageRoutingModule } from './question14-routing.module';

import { Question14Page } from './question14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question14PageRoutingModule
  ],
  declarations: [Question14Page]
})
export class Question14PageModule {}
