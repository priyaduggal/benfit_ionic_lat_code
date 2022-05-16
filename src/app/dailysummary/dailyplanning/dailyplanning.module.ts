import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyplanningPageRoutingModule } from './dailyplanning-routing.module';
import {AccordionModule} from 'ngx-accordion';
import { DailyplanningPage } from './dailyplanning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionModule,
    DailyplanningPageRoutingModule
  ],
  declarations: [DailyplanningPage]
})
export class DailyplanningPageModule {}
