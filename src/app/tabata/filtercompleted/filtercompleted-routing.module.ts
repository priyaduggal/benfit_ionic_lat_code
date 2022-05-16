import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltercompletedPage } from './filtercompleted.page';

const routes: Routes = [
  {
    path: '',
    component: FiltercompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltercompletedPageRoutingModule {}
