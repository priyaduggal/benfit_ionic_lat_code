import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertupdateprofilePage } from './expertupdateprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertupdateprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertupdateprofilePageRoutingModule {}
