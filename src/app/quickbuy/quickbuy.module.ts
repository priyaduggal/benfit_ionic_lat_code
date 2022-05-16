import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickbuyPageRoutingModule } from './quickbuy-routing.module';

import { QuickbuyPage } from './quickbuy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickbuyPageRoutingModule
  ],
  declarations: [QuickbuyPage]
})
export class QuickbuyPageModule {}
