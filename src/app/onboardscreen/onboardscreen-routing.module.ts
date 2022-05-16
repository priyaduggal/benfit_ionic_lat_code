import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardscreenPage } from './onboardscreen.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardscreenPageRoutingModule {}
