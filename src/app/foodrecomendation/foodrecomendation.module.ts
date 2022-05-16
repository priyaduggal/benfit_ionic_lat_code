import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodrecomendationPageRoutingModule } from './foodrecomendation-routing.module';

import { FoodrecomendationPage } from './foodrecomendation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodrecomendationPageRoutingModule
  ],
  declarations: [FoodrecomendationPage]
})
export class FoodrecomendationPageModule {}
