import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataPickerModule } from './data-picker/data-picker.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DeleteblogPage } from './deleteblog/deleteblog.page';
import { SharedModule } from './shared/shared.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { QuickbuyPage } from './quickbuy/quickbuy.page';
import { NgxStarsModule } from 'ngx-stars';
import { CalendarModule } from 'ion2-calendar';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { VideoEditor,CreateThumbnailOptions } from '@ionic-native/video-editor/ngx';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
@NgModule({
  declarations: [AppComponent,DeleteblogPage,QuickbuyPage],
  entryComponents: [DeleteblogPage,QuickbuyPage],
  imports: [NgxQRCodeModule,CalendarModule,NgxStarsModule,DataPickerModule,SharedModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,CKEditorModule ],
  providers: [VideoEditor,BarcodeScanner,PhotoViewer,PDFGenerator,StatusBar,SplashScreen,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },HttpClient],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule {}
