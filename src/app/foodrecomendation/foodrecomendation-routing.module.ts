import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodrecomendationPage } from './foodrecomendation.page';

const routes: Routes = [
  {
    path: '',
    component: FoodrecomendationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodrecomendationPageRoutingModule {}
