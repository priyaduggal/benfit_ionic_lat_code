import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivestreamingPageRoutingModule } from './livestreaming-routing.module';

import { LivestreamingPage } from './livestreaming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivestreamingPageRoutingModule
  ],
  declarations: [LivestreamingPage]
})
export class LivestreamingPageModule {}
