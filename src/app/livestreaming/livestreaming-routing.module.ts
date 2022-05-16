import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivestreamingPage } from './livestreaming.page';

const routes: Routes = [
  {
    path: '',
    component: LivestreamingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivestreamingPageRoutingModule {}
