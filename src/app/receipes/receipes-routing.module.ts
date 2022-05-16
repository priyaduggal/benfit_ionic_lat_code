import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipesPage } from './receipes.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipesPage
  },
  {
    path: 'recipesdetails/:id',
    loadChildren: () => import('./recipesdetails/recipesdetails.module').then( m => m.RecipesdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipesPageRoutingModule {}
