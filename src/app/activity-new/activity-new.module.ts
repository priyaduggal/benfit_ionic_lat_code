import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityNewPageRoutingModule } from './activity-new-routing.module';

import { ActivityNewPage } from './activity-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityNewPageRoutingModule
  ],
  declarations: [ActivityNewPage]
})
export class ActivityNewPageModule {}
