import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastdetailsPageRoutingModule } from './podcastdetails-routing.module';

import { PodcastdetailsPage } from './podcastdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastdetailsPageRoutingModule
  ],
  declarations: [PodcastdetailsPage]
})
export class PodcastdetailsPageModule {}
