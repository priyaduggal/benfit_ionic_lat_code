import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilecompPage } from './profilecomp.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilecompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilecompPageRoutingModule {}
