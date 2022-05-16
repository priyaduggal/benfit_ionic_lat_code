import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastplayPageRoutingModule } from './podcastplay-routing.module';

import { PodcastplayPage } from './podcastplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastplayPageRoutingModule
  ],
  declarations: [PodcastplayPage]
})
export class PodcastplayPageModule {}
