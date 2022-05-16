import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'updateprofile',
    loadChildren: () => import('./updateprofile/updateprofile.module').then( m => m.UpdateprofilePageModule)
  },
  {
    path: 'changeemail',
    loadChildren: () => import('./changeemail/changeemail.module').then( m => m.ChangeemailPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
  {
    path: 'termsconditions',
    loadChildren: () => import('./termsconditions/termsconditions.module').then( m => m.TermsconditionsPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },  {
    path: 'updateprofile1',
    loadChildren: () => import('./updateprofile1/updateprofile1.module').then( m => m.Updateprofile1PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
