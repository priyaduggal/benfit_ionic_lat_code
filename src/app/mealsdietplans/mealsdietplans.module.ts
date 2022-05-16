import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealsdietplansPageRoutingModule } from './mealsdietplans-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MealsdietplansPage } from './mealsdietplans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealsdietplansPageRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  declarations: [MealsdietplansPage]
})
export class MealsdietplansPageModule {}
