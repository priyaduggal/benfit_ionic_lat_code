import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutcompletePage } from './workoutcomplete.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutcompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutcompletePageRoutingModule {}
