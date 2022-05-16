import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookexpertPage } from './bookexpert.page';

const routes: Routes = [
  {
    path: '',
    component: BookexpertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookexpertPageRoutingModule {}
