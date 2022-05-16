import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppcameraPageRoutingModule } from './appcamera-routing.module';

import { AppcameraPage } from './appcamera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppcameraPageRoutingModule
  ],
  declarations: [AppcameraPage]
})
export class AppcameraPageModule {}
