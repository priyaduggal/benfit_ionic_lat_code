import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoguidePage } from './videoguide.page';

const routes: Routes = [
  {
    path: '',
    component: VideoguidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoguidePageRoutingModule {}
