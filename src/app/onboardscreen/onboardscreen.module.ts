import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardscreenPageRoutingModule } from './onboardscreen-routing.module';

import { OnboardscreenPage } from './onboardscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardscreenPageRoutingModule
  ],
  declarations: [OnboardscreenPage]
})
export class OnboardscreenPageModule {}
