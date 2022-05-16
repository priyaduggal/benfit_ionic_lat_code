import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditblogPageRoutingModule } from './editblog-routing.module';

import { EditblogPage } from './editblog.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,CKEditorModule,
    IonicModule,
    EditblogPageRoutingModule
  ],
  declarations: [EditblogPage]
})
export class EditblogPageModule {}
