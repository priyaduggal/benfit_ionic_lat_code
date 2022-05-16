import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
id:any;
qrdata:any;
profiletab: string = "Basic";
scannedCode=null;
errors:any=['',null,undefined];
images_url:any=config.IMAGES_URL;
userdata:any;
elementType:'url'|'canvas'|'img'='canvas';
 constructor (private barcodeScanner:BarcodeScanner,private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { 
this.id = activatedRoute.snapshot.paramMap.get('id');
}

  ngOnInit() {
  }

}
