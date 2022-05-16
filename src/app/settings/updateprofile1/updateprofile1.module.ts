import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Updateprofile1PageRoutingModule } from './updateprofile1-routing.module';

import { Updateprofile1Page } from './updateprofile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Updateprofile1PageRoutingModule
  ],
  declarations: [Updateprofile1Page]
})
export class Updateprofile1PageModule {}
