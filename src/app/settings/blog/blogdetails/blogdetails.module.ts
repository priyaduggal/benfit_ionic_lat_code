import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogdetailsPageRoutingModule } from './blogdetails-routing.module';

import { BlogdetailsPage } from './blogdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogdetailsPageRoutingModule
  ],
  declarations: [BlogdetailsPage]
})
export class BlogdetailsPageModule {}
