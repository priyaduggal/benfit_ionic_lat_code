import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipesPageRoutingModule } from './receipes-routing.module';

import { ReceipesPage } from './receipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipesPageRoutingModule
  ],
  declarations: [ReceipesPage]
})
export class ReceipesPageModule {}
