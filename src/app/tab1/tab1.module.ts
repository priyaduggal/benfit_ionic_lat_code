import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {AccordionModule} from 'ngx-accordion';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    AccordionModule,
    NgCircleProgressModule.forRoot({})
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
