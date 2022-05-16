import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookWorkoutPage } from './book-workout.page';

const routes: Routes = [
  {
    path: '',
    component: BookWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookWorkoutPageRoutingModule {}
