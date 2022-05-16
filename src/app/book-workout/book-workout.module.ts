import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookWorkoutPageRoutingModule } from './book-workout-routing.module';

import { BookWorkoutPage } from './book-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookWorkoutPageRoutingModule
  ],
  declarations: [BookWorkoutPage]
})
export class BookWorkoutPageModule {}
