import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventnewsPage } from './eventnews.page';

const routes: Routes = [
  {
    path: '',
    component: EventnewsPage
  },
  {
    path: 'addevents',
    loadChildren: () => import('./addevents/addevents.module').then( m => m.AddeventsPageModule)
  },
  {
    path: 'editevent/:id',
    loadChildren: () => import('./editevent/editevent.module').then( m => m.EditeventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventnewsPageRoutingModule {}
