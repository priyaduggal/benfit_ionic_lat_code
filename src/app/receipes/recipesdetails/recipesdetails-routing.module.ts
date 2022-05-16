import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesdetailsPage } from './recipesdetails.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesdetailsPageRoutingModule {}
