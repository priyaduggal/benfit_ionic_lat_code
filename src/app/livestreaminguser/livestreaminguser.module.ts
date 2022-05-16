import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivestreaminguserPageRoutingModule } from './livestreaminguser-routing.module';

import { LivestreaminguserPage } from './livestreaminguser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivestreaminguserPageRoutingModule
  ],
  declarations: [LivestreaminguserPage]
})
export class LivestreaminguserPageModule {}
