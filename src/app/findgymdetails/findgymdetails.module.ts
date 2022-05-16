import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindgymdetailsPageRoutingModule } from './findgymdetails-routing.module';

import { FindgymdetailsPage } from './findgymdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindgymdetailsPageRoutingModule
  ],
  declarations: [FindgymdetailsPage]
})
export class FindgymdetailsPageModule {}
