import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealsdetailsPage } from './mealsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: MealsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsdetailsPageRoutingModule {}
