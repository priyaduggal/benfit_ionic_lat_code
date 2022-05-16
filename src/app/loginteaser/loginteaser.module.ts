import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginteaserPageRoutingModule } from './loginteaser-routing.module';

import { LoginteaserPage } from './loginteaser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginteaserPageRoutingModule
  ],
  declarations: [LoginteaserPage]
})
export class LoginteaserPageModule {}
