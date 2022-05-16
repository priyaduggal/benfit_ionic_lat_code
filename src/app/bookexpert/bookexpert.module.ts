import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookexpertPageRoutingModule } from './bookexpert-routing.module';

import { BookexpertPage } from './bookexpert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookexpertPageRoutingModule
  ],
  declarations: [BookexpertPage]
})
export class BookexpertPageModule {}
