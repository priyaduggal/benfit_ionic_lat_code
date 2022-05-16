import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutcompletePageRoutingModule } from './workoutcomplete-routing.module';

import { WorkoutcompletePage } from './workoutcomplete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutcompletePageRoutingModule
  ],
  declarations: [WorkoutcompletePage]
})
export class WorkoutcompletePageModule {}
