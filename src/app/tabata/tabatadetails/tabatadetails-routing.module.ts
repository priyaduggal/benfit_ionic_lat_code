import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabatadetailsPage } from './tabatadetails.page';

const routes: Routes = [
  {
    path: '',
    component: TabatadetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabatadetailsPageRoutingModule {}
