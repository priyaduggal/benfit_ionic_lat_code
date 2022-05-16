import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCourseSchedulePageRoutingModule } from './view-course-schedule-routing.module';

import { ViewCourseSchedulePage } from './view-course-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCourseSchedulePageRoutingModule
  ],
  declarations: [ViewCourseSchedulePage]
})
export class ViewCourseSchedulePageModule {}
