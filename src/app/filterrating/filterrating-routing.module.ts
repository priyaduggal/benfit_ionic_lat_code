import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterratingPage } from './filterrating.page';
const routes: Routes = [
  {
    path: '',
    component: FilterratingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterratingPageRoutingModule {}
