import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastplayPage } from './podcastplay.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastplayPageRoutingModule {}
