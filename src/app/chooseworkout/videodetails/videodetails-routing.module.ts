import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideodetailsPage } from './videodetails.page';

const routes: Routes = [
  {
    path: '',
    component: VideodetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideodetailsPageRoutingModule {}
