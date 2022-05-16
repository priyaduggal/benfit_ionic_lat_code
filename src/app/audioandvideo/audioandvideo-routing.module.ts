import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioandvideoPage } from './audioandvideo.page';

const routes: Routes = [
  {
    path: '',
    component: AudioandvideoPage
  },
  {
    path: 'videoguide',
    loadChildren: () => import('./videoguide/videoguide.module').then( m => m.VideoguidePageModule)
  },
  {
    path: 'audioguide',
    loadChildren: () => import('./audioguide/audioguide.module').then( m => m.AudioguidePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioandvideoPageRoutingModule {}
