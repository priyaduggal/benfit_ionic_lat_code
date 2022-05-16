import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutvideosPage } from './workoutvideos.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutvideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutvideosPageRoutingModule {}
