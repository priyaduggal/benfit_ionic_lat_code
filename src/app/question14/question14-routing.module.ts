import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question14Page } from './question14.page';

const routes: Routes = [
  {
    path: '',
    component: Question14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question14PageRoutingModule {}
