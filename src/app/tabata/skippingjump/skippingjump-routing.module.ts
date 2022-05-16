import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkippingjumpPage } from './skippingjump.page';

const routes: Routes = [
  {
    path: '',
    component: SkippingjumpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkippingjumpPageRoutingModule {}
