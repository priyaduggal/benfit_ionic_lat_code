import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideocallingPage } from './videocalling.page';

const routes: Routes = [
  {
    path: '',
    component: VideocallingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideocallingPageRoutingModule {}
