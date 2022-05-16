import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoguidePageRoutingModule } from './videoguide-routing.module';

import { VideoguidePage } from './videoguide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoguidePageRoutingModule
  ],
  declarations: [VideoguidePage]
})
export class VideoguidePageModule {}
