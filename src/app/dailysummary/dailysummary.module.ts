import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailysummaryPageRoutingModule } from './dailysummary-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DailysummaryPage } from './dailysummary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailysummaryPageRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  declarations: [DailysummaryPage]
})
export class DailysummaryPageModule {}
