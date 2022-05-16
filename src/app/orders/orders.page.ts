import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
orders:any=[];
userid:any;
IMAGES_URL:any = config.IMAGES_URL; 
errors:any=[0,'',null,undefined];
constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getorders();
  }
showimage(image)
{
  if(this.errors.indexOf(image)==-1){
        var im=image.split(",");
        console.log(im);
      return this.IMAGES_URL+'/'+im[0];
    }
}
  getorders(){
       let dict ={
      id: this.userid,
      };
      this.common.presentLoading();
        this.api.post('getorderlist',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.orders=res.data; 
          }else
          {
          this.common.presentToast(res.message,'danger');
          }
        },
      err => {
      });
  }


}
