import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseworkoutPage } from './chooseworkout.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseworkoutPage
  },
  {
    path: 'workoutvideos/:id',
    loadChildren: () => import('./workoutvideos/workoutvideos.module').then( m => m.WorkoutvideosPageModule)
  },
  {
    path: 'videodetails/:id',
    loadChildren: () => import('./videodetails/videodetails.module').then( m => m.VideodetailsPageModule)
  },
  {
    path: 'workoutcomplete',
    loadChildren: () => import('./workoutcomplete/workoutcomplete.module').then( m => m.WorkoutcompletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseworkoutPageRoutingModule {}
