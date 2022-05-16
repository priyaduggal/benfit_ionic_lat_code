import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodresponsiblePage } from './foodresponsible.page';

const routes: Routes = [
  {
    path: '',
    component: FoodresponsiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodresponsiblePageRoutingModule {}
