import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
errors:any=[0,'',null,undefined];
currentNumber = 0;
totalpt: number = 0;
userid:any;
IMAGES_URL:any = config.IMAGES_URL; 
details:any;
constructor (private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { }

  ionViewDidEnter(){
   this.userid=localStorage.getItem('benfit_userid');
   this.getcart();
  }
  submit(){
     let dict ={
      userid: this.userid,
      };
      this.common.presentLoading();
        this.api.post('placeorder',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
             this.api.navCtrl.navigateRoot('/success');
             this.common.presentToast('Order placed successfully','success');
          }else
          {
          this.common.presentToast(res.message,'danger');
        }
        },
         err => {
      });
  }
   getorprice(price,discount){

    return (price - ( price * discount / 100 )).toFixed(2); // Sale price
  }
  getcart(){
     let dict ={
      userid: this.userid,
      };
      this.common.presentLoading();
        this.api.post('getcartdetails',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.details=res.data;
          var total=0;
          var self=this;
          if(this.details.length>0){
          this.details.forEach(function(dev){
            if(self.errors.indexOf(dev.res_id)>=0){
            var q=parseFloat(self.getorprice(dev.mianprice,dev.discount)) * parseInt(dev.quantity);
          }else{
             var q=parseFloat(dev.rprice) * parseInt(dev.quantity);
          }
  
           total=total+q;

          });
          this.totalpt=total;
          } 
       
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });
  }
  ngOnInit() {
  }

}
