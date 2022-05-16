import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekplanningPageRoutingModule } from './weekplanning-routing.module';

import { WeekplanningPage } from './weekplanning.page';
import {AccordionModule} from 'ngx-accordion';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionModule,
    WeekplanningPageRoutingModule
  ],
  declarations: [WeekplanningPage]
})
export class WeekplanningPageModule {}
