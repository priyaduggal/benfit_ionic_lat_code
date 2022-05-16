import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseexpertPage } from './chooseexpert.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseexpertPage
  },
  {
    path: 'expertdetails/:id',
    loadChildren: () => import('./expertdetails/expertdetails.module').then( m => m.ExpertdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseexpertPageRoutingModule {}
