import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioandvideoPageRoutingModule } from './audioandvideo-routing.module';

import { AudioandvideoPage } from './audioandvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioandvideoPageRoutingModule
  ],
  declarations: [AudioandvideoPage]
})
export class AudioandvideoPageModule {}
