import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesdetailsPageRoutingModule } from './recipesdetails-routing.module';

import { RecipesdetailsPage } from './recipesdetails.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesdetailsPageRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  declarations: [RecipesdetailsPage]
})
export class RecipesdetailsPageModule {}
