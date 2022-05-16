import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question16PageRoutingModule } from './question16-routing.module';

import { Question16Page } from './question16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question16PageRoutingModule
  ],
  declarations: [Question16Page]
})
export class Question16PageModule {}
