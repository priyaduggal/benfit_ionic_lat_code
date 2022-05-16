import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealstypedetailsPage } from './mealstypedetails.page';

const routes: Routes = [
  {
    path: '',
    component: MealstypedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealstypedetailsPageRoutingModule {}
