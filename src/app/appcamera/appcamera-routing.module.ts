import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppcameraPage } from './appcamera.page';

const routes: Routes = [
  {
    path: '',
    component: AppcameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppcameraPageRoutingModule {}
