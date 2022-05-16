import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioguidePage } from './audioguide.page';

const routes: Routes = [
  {
    path: '',
    component: AudioguidePage
  },
  {
    path: 'audioplayer/:id',
    loadChildren: () => import('./audioplayer/audioplayer.module').then( m => m.AudioplayerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioguidePageRoutingModule {}
