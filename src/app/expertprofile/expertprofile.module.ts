import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertprofilePageRoutingModule } from './expertprofile-routing.module';

import { ExpertprofilePage } from './expertprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertprofilePageRoutingModule
  ],
  declarations: [ExpertprofilePage]
})
export class ExpertprofilePageModule {}
