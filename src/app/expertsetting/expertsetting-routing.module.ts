import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertsettingPage } from './expertsetting.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertsettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertsettingPageRoutingModule {}
