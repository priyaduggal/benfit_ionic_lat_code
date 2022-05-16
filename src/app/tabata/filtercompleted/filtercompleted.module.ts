import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltercompletedPageRoutingModule } from './filtercompleted-routing.module';

import { FiltercompletedPage } from './filtercompleted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltercompletedPageRoutingModule
  ],
  declarations: [FiltercompletedPage]
})
export class FiltercompletedPageModule {}
