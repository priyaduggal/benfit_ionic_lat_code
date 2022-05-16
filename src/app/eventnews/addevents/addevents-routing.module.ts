import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddeventsPage } from './addevents.page';

const routes: Routes = [
  {
    path: '',
    component: AddeventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddeventsPageRoutingModule {}
