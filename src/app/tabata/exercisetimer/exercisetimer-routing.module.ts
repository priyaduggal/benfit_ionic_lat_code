import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisetimerPage } from './exercisetimer.page';

const routes: Routes = [
  {
    path: '',
    component: ExercisetimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisetimerPageRoutingModule {}
