import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodresponsiblePageRoutingModule } from './foodresponsible-routing.module';

import { FoodresponsiblePage } from './foodresponsible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodresponsiblePageRoutingModule
  ],
  declarations: [FoodresponsiblePage]
})
export class FoodresponsiblePageModule {}
