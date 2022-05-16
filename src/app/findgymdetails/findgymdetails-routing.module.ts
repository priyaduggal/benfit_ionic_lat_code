import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindgymdetailsPage } from './findgymdetails.page';

const routes: Routes = [
  {
    path: '',
    component: FindgymdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindgymdetailsPageRoutingModule {}
