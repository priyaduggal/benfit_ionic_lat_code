import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupNewPage } from './signup-new.page';

const routes: Routes = [
  {
    path: '',
    component: SignupNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupNewPageRoutingModule {}
