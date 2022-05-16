import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyplanningPage } from './dailyplanning.page';

const routes: Routes = [
  {
    path: '',
    component: DailyplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyplanningPageRoutingModule {}
