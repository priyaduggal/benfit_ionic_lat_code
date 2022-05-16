import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.page.html',
  styleUrls: ['./orderdetails.page.scss'],
})
export class OrderdetailsPage implements OnInit {
details:any;
orderid:any;
userid:any;
IMAGES_URL:any = config.IMAGES_URL; 
errors:any=[0,'',null,undefined];
constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { 
this.orderid = activatedRoute.snapshot.paramMap.get('id');

}

  ngOnInit() {
  }
  getorprice(price,discount){

    return (price - ( price * discount / 100 )).toFixed(2); // Sale price
  }
  ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getorderdetails();
  }
showimage(image){
   if(this.errors.indexOf(image)==-1){
        var im=image.split(",");
        return this.IMAGES_URL+'/'+im[0];
    }
}
  getorderdetails(){
     let dict ={
      id: this.orderid,
      };
        this.common.presentLoading();
        this.api.post('get_order_details',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.details=res.data; 
         
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });
  }

}
