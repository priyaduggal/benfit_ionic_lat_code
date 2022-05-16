import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideocallingPageRoutingModule } from './videocalling-routing.module';

import { VideocallingPage } from './videocalling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideocallingPageRoutingModule
  ],
  declarations: [VideocallingPage]
})
export class VideocallingPageModule {}
