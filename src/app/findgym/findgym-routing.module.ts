import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindgymPage } from './findgym.page';

const routes: Routes = [
  {
    path: '',
    component: FindgymPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindgymPageRoutingModule {}
