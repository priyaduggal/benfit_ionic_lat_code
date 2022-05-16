import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutvideosPageRoutingModule } from './workoutvideos-routing.module';

import { WorkoutvideosPage } from './workoutvideos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutvideosPageRoutingModule
  ],
  declarations: [WorkoutvideosPage]
})
export class WorkoutvideosPageModule {}
