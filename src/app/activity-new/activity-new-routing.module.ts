import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityNewPage } from './activity-new.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityNewPageRoutingModule {}
