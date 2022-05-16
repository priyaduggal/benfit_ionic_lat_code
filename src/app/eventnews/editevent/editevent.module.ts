import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditeventPageRoutingModule } from './editevent-routing.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { EditeventPage } from './editevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,GooglePlaceModule,
    IonicModule,
    EditeventPageRoutingModule
  ],
  declarations: [EditeventPage]
})
export class EditeventPageModule {}
