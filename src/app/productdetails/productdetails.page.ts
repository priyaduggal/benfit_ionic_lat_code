import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {
errors:any=['',null,undefined];
pid:any;product:any;
images:any=[];
cprice:any;
IMAGES_URL:any = config.IMAGES_URL; 
types:any;
userid:any;
type:any;
details:any;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
currentNumber = 1;
constructor (private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { 
this.pid = activatedRoute.snapshot.paramMap.get('id');
}
  getorprice(price,discount){

    return (price - ( price * discount / 100 )).toFixed(2); // Sale price
  }
addtocart(){
this.product= $('input[name=product]:checked').val();
  if(this.errors.indexOf(this.product)>=0){
     this.common.presentToast('Select product type ','danger');
  }else{
    let dict ={
      userid:localStorage.getItem('benfit_userid'),
      productid: this.pid,
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
  increment () {
    var tt= this.types[0]?.price;
    this.currentNumber++;
    this.types[0].price=this.cprice * this.currentNumber;
   
  }
    ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
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
      id: this.pid,
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

  decrement () {
    if(this.currentNumber>1){

      var tt= this.cprice;
      this.currentNumber--;
      this.types[0].price=this.cprice * this.currentNumber;
  
  }
  }

  ngOnInit() {
  }

}
