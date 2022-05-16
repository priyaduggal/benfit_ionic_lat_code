import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCourseSchedulePage } from './view-course-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCourseSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCourseSchedulePageRoutingModule {}
