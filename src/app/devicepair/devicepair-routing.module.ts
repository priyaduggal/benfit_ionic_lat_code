import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicepairPage } from './devicepair.page';

const routes: Routes = [
  {
    path: '',
    component: DevicepairPage
  },
  {
    path: 'watchbrand',
    loadChildren: () => import('./watchbrand/watchbrand.module').then( m => m.WatchbrandPageModule)
  },
  {
    path: 'pair',
    loadChildren: () => import('./pair/pair.module').then( m => m.PairPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicepairPageRoutingModule {}
