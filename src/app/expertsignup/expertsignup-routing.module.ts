import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertsignupPage } from './expertsignup.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertsignupPageRoutingModule {}
