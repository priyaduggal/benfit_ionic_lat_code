import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventnewsPageRoutingModule } from './eventnews-routing.module';

import { EventnewsPage } from './eventnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventnewsPageRoutingModule
  ],
  declarations: [EventnewsPage]
})
export class EventnewsPageModule {}
