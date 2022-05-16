import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddblogPageRoutingModule } from './addblog-routing.module';

import { AddblogPage } from './addblog.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,CKEditorModule,
    IonicModule,
    AddblogPageRoutingModule
  ],
  declarations: [AddblogPage]
})
export class AddblogPageModule {}
