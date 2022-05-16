import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteblogPageRoutingModule } from './deleteblog-routing.module';

import { DeleteblogPage } from './deleteblog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteblogPageRoutingModule
  ],
  declarations: [DeleteblogPage]
})
export class DeleteblogPageModule {}
