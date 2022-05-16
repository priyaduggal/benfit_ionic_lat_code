import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchdulesessionPage } from './schdulesession.page';

const routes: Routes = [
  {
    path: '',
    component: SchdulesessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchdulesessionPageRoutingModule {}
