import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailysummaryPage } from './dailysummary.page';

const routes: Routes = [
  {
    path: '',
    component: DailysummaryPage
  },
  {
    path: 'dailyplanning',
    loadChildren: () => import('./dailyplanning/dailyplanning.module').then( m => m.DailyplanningPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailysummaryPageRoutingModule {}
