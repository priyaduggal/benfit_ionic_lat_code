import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideodetailsPageRoutingModule } from './videodetails-routing.module';

import { VideodetailsPage } from './videodetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideodetailsPageRoutingModule
  ],
  declarations: [VideodetailsPage]
})
export class VideodetailsPageModule {}
