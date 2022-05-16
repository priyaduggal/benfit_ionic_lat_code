import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Updateprofile1Page } from './updateprofile1.page';

const routes: Routes = [
  {
    path: '',
    component: Updateprofile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Updateprofile1PageRoutingModule {}
