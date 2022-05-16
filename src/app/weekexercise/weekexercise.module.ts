import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekexercisePageRoutingModule } from './weekexercise-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { WeekexercisePage } from './weekexercise.page';
import { CalendarModule } from 'ion2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,CalendarModule,
    WeekexercisePageRoutingModule,
     NgCircleProgressModule.forRoot({})
  ],
  declarations: [WeekexercisePage]
})
export class WeekexercisePageModule {}
