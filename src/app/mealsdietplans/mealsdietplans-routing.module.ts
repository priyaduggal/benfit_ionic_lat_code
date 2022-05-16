import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealsdietplansPage } from './mealsdietplans.page';

const routes: Routes = [
  {
    path: '',
    component: MealsdietplansPage
  },
  {
    path: 'mealsdetails/:id',
    loadChildren: () => import('./mealsdetails/mealsdetails.module').then( m => m.MealsdetailsPageModule)
  },
  {
    path: 'mealstypedetails/:mid/:id',
    loadChildren: () => import('./mealstypedetails/mealstypedetails.module').then( m => m.MealstypedetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsdietplansPageRoutingModule {}
