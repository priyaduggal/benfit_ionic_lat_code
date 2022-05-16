import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertprofilePage } from './expertprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertprofilePage
  },
  {
    path: 'expertupdateprofile',
    loadChildren: () => import('./expertupdateprofile/expertupdateprofile.module').then( m => m.ExpertupdateprofilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertprofilePageRoutingModule {}
