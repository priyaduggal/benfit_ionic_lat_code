import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickbuyPage } from './quickbuy.page';

const routes: Routes = [
  {
    path: '',
    component: QuickbuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickbuyPageRoutingModule {}
