import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertupdateprofilePageRoutingModule } from './expertupdateprofile-routing.module';

import { ExpertupdateprofilePage } from './expertupdateprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertupdateprofilePageRoutingModule
  ],
  declarations: [ExpertupdateprofilePage]
})
export class ExpertupdateprofilePageModule {}
