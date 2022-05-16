import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddeventsPageRoutingModule } from './addevents-routing.module';

import { AddeventsPage } from './addevents.page';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
@NgModule({
  imports: [
    CommonModule,GooglePlaceModule,
    FormsModule,
    IonicModule,
    AddeventsPageRoutingModule
  ],
  declarations: [AddeventsPage]
})
export class AddeventsPageModule {}
