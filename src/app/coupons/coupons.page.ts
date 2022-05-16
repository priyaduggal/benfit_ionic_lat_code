import { Component, OnInit } from '@angular/core';
import { config } from '../config';
import { DomSanitizer } from '@angular/platform-browser';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
img:any;
newblob:any;
url:any;
extension:any;
caption:any;
errors:any=['',null,undefined];
couponlist:any=[];
elementType:'url'|'canvas'|'img'='canvas';
IMAGES_URL:any = config.IMAGES_URL; 
  constructor(private barcodeScanner:BarcodeScanner,public api:ApiService,private common: CommonService,public sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
   ionViewDidEnter(){
    this.coupons();
   }
   coupons(){

 
      this.common.presentLoading();
        this.api.post('getallcoupons','','').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
           
            this.couponlist=res.data;
          
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });
   }
 

}
