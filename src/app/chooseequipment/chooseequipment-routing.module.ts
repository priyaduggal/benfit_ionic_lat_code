import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseequipmentPage } from './chooseequipment.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseequipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseequipmentPageRoutingModule {}
