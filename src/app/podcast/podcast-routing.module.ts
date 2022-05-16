import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastPage } from './podcast.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastPage
  },
  {
    path: 'podcastdetails/:id',
    loadChildren: () => import('./podcastdetails/podcastdetails.module').then( m => m.PodcastdetailsPageModule)
  },
  {
    path: 'podcastplay',
    loadChildren: () => import('./podcastplay/podcastplay.module').then( m => m.PodcastplayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastPageRoutingModule {}
