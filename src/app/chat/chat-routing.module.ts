import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPage
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'videocalling',
    loadChildren: () => import('./videocalling/videocalling.module').then( m => m.VideocallingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
