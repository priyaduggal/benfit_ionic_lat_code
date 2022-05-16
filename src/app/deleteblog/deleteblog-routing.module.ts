import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteblogPage } from './deleteblog.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteblogPageRoutingModule {}
