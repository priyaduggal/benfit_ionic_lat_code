import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentmodalPageRoutingModule } from './appointmentmodal-routing.module';

import { AppointmentmodalPage } from './appointmentmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentmodalPageRoutingModule
  ],
  declarations: [AppointmentmodalPage]
})
export class AppointmentmodalPageModule {}
