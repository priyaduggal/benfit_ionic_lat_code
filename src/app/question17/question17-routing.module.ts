import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question17Page } from './question17.page';

const routes: Routes = [
  {
    path: '',
    component: Question17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question17PageRoutingModule {}
