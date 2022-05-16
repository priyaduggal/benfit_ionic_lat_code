import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNewPageRoutingModule } from './home-new-routing.module';

import { HomeNewPage } from './home-new.page';
import { CalendarModule } from 'ion2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,CalendarModule,
    HomeNewPageRoutingModule
  ],
  declarations: [HomeNewPage]
})
export class HomeNewPageModule {}
