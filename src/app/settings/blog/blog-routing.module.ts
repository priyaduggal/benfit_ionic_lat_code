import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPage } from './blog.page';

const routes: Routes = [
  {
    path: '',
    component: BlogPage
  },
  {
    path: 'addblog',
    loadChildren: () => import('./addblog/addblog.module').then( m => m.AddblogPageModule)
  },
  {
    path: 'blogdetails/:id',
    loadChildren: () => import('./blogdetails/blogdetails.module').then( m => m.BlogdetailsPageModule)
  },
  {
    path: 'editblog/:id',
    loadChildren: () => import('./editblog/editblog.module').then( m => m.EditblogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPageRoutingModule {}
