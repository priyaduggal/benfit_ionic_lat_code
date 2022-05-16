import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabataPage } from './tabata.page';

const routes: Routes = [
  {
    path: '',
    component: TabataPage
  },
  {
    path: 'tabatadetails/:id',
    loadChildren: () => import('./tabatadetails/tabatadetails.module').then( m => m.TabatadetailsPageModule)
  },
  {
    path: 'exercisetimer',
    loadChildren: () => import('./exercisetimer/exercisetimer.module').then( m => m.ExercisetimerPageModule)
  },
  {
    path: 'skippingjump',
    loadChildren: () => import('./skippingjump/skippingjump.module').then( m => m.SkippingjumpPageModule)
  },
  {
    path: 'filtercompleted',
    loadChildren: () => import('./filtercompleted/filtercompleted.module').then( m => m.FiltercompletedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabataPageRoutingModule {}
