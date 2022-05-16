import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogdetailsPage } from './blogdetails.page';

const routes: Routes = [
  {
    path: '',
    component: BlogdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogdetailsPageRoutingModule {}
