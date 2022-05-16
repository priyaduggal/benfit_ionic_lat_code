import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
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
  getorprice(price,discount){

    return (price - ( price * discount / 100 )).toFixed(2); // Sale price
  }
  showimage(image)
{
  if(this.errors.indexOf(image)==-1){
        var im=image.split(",");
        console.log(im);
      return this.IMAGES_URL+'/'+im[0];
    }
}
  removeitem(id,index){
         let dict ={
        id: id,
      };
      this.common.presentLoading();
        this.api.post('remove_item_from_cart',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
            this.details.splice(index,1);
            this.getcart();
          
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });
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
          var self=this;
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

  increment (id,quantity,index) {
      this.details[index].quantity=quantity + 1;
       let dict ={
      id:id,
      quantity:quantity + 1,
      };
        this.api.post('updatecartquantity',dict,'').subscribe((result) => {
          var res;
          res = result;
          if(res.status==1){
          this.getcart();
          }else
          {
          this.common.presentToast(res.message,'danger');
          }
        },
      err => {
      });
  }

  decrement (id,quantity,index) {
if(quantity>1){
this.details[index].quantity=quantity - 1;

 let dict ={
      id:id,
      quantity:quantity - 1,
      };
        this.api.post('updatecartquantity',dict,'').subscribe((result) => {
          var res;
          res = result;
          if(res.status==1){
               this.getcart();
          }else
          {
          this.common.presentToast(res.message,'danger');
          }
        },
      err => {
      });




}
  }

  ngOnInit() {
  }

}
