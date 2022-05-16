import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealstypedetailsPageRoutingModule } from './mealstypedetails-routing.module';

import { MealstypedetailsPage } from './mealstypedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealstypedetailsPageRoutingModule
  ],
  declarations: [MealstypedetailsPage]
})
export class MealstypedetailsPageModule {}
