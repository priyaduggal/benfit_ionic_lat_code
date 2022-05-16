import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteprofilePage } from './completeprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteprofilePage
  },
  {
    path: 'profilecomp',
    loadChildren: () => import('./profilecomp/profilecomp.module').then( m => m.ProfilecompPageModule)
  },
  {
    path: 'uploadphoto',
    loadChildren: () => import('./uploadphoto/uploadphoto.module').then( m => m.UploadphotoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteprofilePageRoutingModule {}
