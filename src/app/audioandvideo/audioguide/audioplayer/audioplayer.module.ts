import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioplayerPageRoutingModule } from './audioplayer-routing.module';
import { AngMusicPlayerModule } from  'ang-music-player';
import { AudioplayerPage } from './audioplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngMusicPlayerModule,
    AudioplayerPageRoutingModule
  ],
  declarations: [AudioplayerPage]
})
export class AudioplayerPageModule {}
