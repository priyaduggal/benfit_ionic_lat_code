import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealsdetailsPageRoutingModule } from './mealsdetails-routing.module';

import { MealsdetailsPage } from './mealsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealsdetailsPageRoutingModule
  ],
  declarations: [MealsdetailsPage]
})
export class MealsdetailsPageModule {}
