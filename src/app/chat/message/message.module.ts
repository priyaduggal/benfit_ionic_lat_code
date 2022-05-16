import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
@NgModule({
  imports: [
    CommonModule,PickerModule,
    FormsModule,
    IonicModule,
    MessagePageRoutingModule
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
