import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindExpertPage } from './find-expert.page';

const routes: Routes = [
  {
    path: '',
    component: FindExpertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindExpertPageRoutingModule {}
