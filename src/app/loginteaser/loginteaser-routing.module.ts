import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginteaserPage } from './loginteaser.page';

const routes: Routes = [
  {
    path: '',
    component: LoginteaserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginteaserPageRoutingModule {}
