import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchbrandPageRoutingModule } from './watchbrand-routing.module';

import { WatchbrandPage } from './watchbrand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchbrandPageRoutingModule
  ],
  declarations: [WatchbrandPage]
})
export class WatchbrandPageModule {}
