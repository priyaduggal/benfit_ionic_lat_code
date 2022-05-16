import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterratingPageRoutingModule } from './filterrating-routing.module';

import { FilterratingPage } from './filterrating.page';
import { NgxStarsModule } from 'ngx-stars';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,NgxStarsModule,
    IonicModule,
    FilterratingPageRoutingModule
  ],
  declarations: [FilterratingPage]
})
export class FilterratingPageModule {}
