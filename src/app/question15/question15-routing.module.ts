import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question15Page } from './question15.page';

const routes: Routes = [
  {
    path: '',
    component: Question15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question15PageRoutingModule {}
