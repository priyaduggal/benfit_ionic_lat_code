import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertdetailsPage } from './expertdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertdetailsPage
  },
  {
    path: 'appointmentmodal',
    loadChildren: () => import('./appointmentmodal/appointmentmodal.module').then( m => m.AppointmentmodalPageModule)
  },
  {
    path: 'schdulesession',
    loadChildren: () => import('./schdulesession/schdulesession.module').then( m => m.SchdulesessionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertdetailsPageRoutingModule {}
