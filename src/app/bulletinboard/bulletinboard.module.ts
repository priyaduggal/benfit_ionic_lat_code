import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulletinboardPageRoutingModule } from './bulletinboard-routing.module';

import { BulletinboardPage } from './bulletinboard.page';
import { CalendarModule } from 'ion2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    BulletinboardPageRoutingModule
  ],
  declarations: [BulletinboardPage]
})
export class BulletinboardPageModule {}
