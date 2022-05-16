import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosegenderPage } from './choosegender.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosegenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosegenderPageRoutingModule {}
