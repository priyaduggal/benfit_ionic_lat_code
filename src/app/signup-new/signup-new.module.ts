import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupNewPageRoutingModule } from './signup-new-routing.module';

import { SignupNewPage } from './signup-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupNewPageRoutingModule
  ],
  declarations: [SignupNewPage]
})
export class SignupNewPageModule {}
