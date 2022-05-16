import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilecompPageRoutingModule } from './profilecomp-routing.module';

import { ProfilecompPage } from './profilecomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilecompPageRoutingModule
  ],
  declarations: [ProfilecompPage]
})
export class ProfilecompPageModule {}
