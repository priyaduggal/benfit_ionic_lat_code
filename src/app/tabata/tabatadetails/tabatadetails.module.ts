import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabatadetailsPageRoutingModule } from './tabatadetails-routing.module';

import { TabatadetailsPage } from './tabatadetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabatadetailsPageRoutingModule
  ],
  declarations: [TabatadetailsPage]
})
export class TabatadetailsPageModule {}
