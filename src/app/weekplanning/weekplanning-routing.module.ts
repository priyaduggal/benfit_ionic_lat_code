import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekplanningPage } from './weekplanning.page';

const routes: Routes = [
  {
    path: '',
    component: WeekplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekplanningPageRoutingModule {}
