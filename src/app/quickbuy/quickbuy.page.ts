import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { config } from '../config';
import {ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import { ModalController,NavParams } from '@ionic/angular';
import {CommonService} from '../services/common.service';
@Component({
  selector: 'app-quickbuy',
  templateUrl: './quickbuy.page.html',
  styleUrls: ['./quickbuy.page.scss'],
})
export class QuickbuyPage implements OnInit {
id:any;
product:any;
IMAGES_URL:any = config.IMAGES_URL; 
errors:any=['',null,undefined];
details:any;
types:any=[];
images:any=[];
cprice:any;currentNumber = 1;
 constructor(public navParams: NavParams,public api:ApiService,
  public modalController: ModalController,
  private common: CommonService) { 
this.id=navParams.get('id'); 
this.currentNumber=1;
this.getpdetails();

}
 showprice(typeid)
  {
     let dict ={
      id: typeid,
      };
        this.api.post('showprice',dict,'').subscribe((result) => {
          var res;
          res = result;
          if(res.status==1){
            this.cprice=res.data;
           this.types[0].price=res.data * this.currentNumber;
         
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });
  }
 getpdetails(){
     let dict ={
      id: this.id,
      };
      this.common.presentLoading();
        this.api.post('getproductdetails',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.details=res.data; 
          this.types=res.types;

          if(this.errors.indexOf( this.details.images)==-1){
          this.images=this.details.images.split(",");
          }
          
          this.cprice=this.types[0].price;
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
  dismiss()
  {
    this.modalController.dismiss({
      'dismissed': true
    });

  }
addtocart(){
this.product= $('input[name=product]:checked').val();
  if(this.errors.indexOf(this.product)>=0){
     this.common.presentToast('Select product type ','danger');
  }else{
    let dict ={
      userid:localStorage.getItem('benfit_userid'),
      productid: this.id,
      type:this.product,
       ingid:'',
      quantity:this.currentNumber,
      };
       this.common.presentLoading();
        this.api.post('add_to_cart',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
            this.dismiss();
             this.api.navCtrl.navigateRoot('cart');
         this.common.presentToast('Added to Cart Successfully','success');
          }else
          {
          this.common.presentToast(res.message,'danger');
           }
        },
      err => {
      });
  }
}
   decrement () {
    if(this.currentNumber>1){

      var tt= this.cprice;
      this.currentNumber--;
      this.types[0].price=this.cprice * this.currentNumber;
  
  }
  }
   increment () {
    var tt= this.types[0]?.price;
    this.currentNumber++;
    this.types[0].price=this.cprice * this.currentNumber;
   
  }

  ngOnInit() {
  }

}
