import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchbrandPage } from './watchbrand.page';

const routes: Routes = [
  {
    path: '',
    component: WatchbrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchbrandPageRoutingModule {}
