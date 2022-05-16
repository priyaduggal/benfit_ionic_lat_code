import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercisetimerPageRoutingModule } from './exercisetimer-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExercisetimerPage } from './exercisetimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercisetimerPageRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  declarations: [ExercisetimerPage]
})
export class ExercisetimerPageModule {}
