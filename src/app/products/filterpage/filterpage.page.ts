import { ModalController } from '@ionic/angular';
import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.page.html',
  styleUrls: ['./filterpage.page.scss'],
})
export class FilterpagePage implements OnInit {
  filtertab: any ='price';
  userid:any;
  prange=0;
   time: any;
 timeMin: any = 10;
 timeMax: any = 5000;
 timeMin2: any;
 timeMax2: any;
  prices:any=[];
  discounts:any=[];
  categoriesselect:any=[];
  categories=[];
  constructor(public api:ApiService,
    private common: CommonService,
    public modalController: ModalController) {
  }

 setBadge(time) {
  this.timeMin2 = time.lower;
  this.timeMax2 = time.upper;
  console.log("min",this.timeMin2);
  console.log("max",this.timeMax2);
}
  ngOnInit() {
  }
ionViewDidEnter()
    {
      this.userid=localStorage.getItem('benfit_userid'),
      this.getproductcategory();
    }
    categoryall(all)
    {
       if(this.categoriesselect.indexOf(all)>=0){
         var index=this.categoriesselect.indexOf(all);
         this.categoriesselect.splice(index,1);
           $('.categories').attr('checked',false);
       }else{
           this.categoriesselect.push(all);
           $('.categories').attr('checked',true);
       }

       console.log(this.categoriesselect);
    }
    category(value)
    {
      if(this.categoriesselect.indexOf(value)>=0){
          var index=this.categoriesselect.indexOf(value);
         this.categoriesselect.splice(index,1);

      }else{
       this.categoriesselect.push(value);
     } 
      console.log(this.categoriesselect);
    }
    discount(value)
    {
    if(this.discounts.indexOf(value)>=0){
          var index=this.discounts.indexOf(value);
         this.discounts.splice(index,1);

      }else{
       this.discounts.push(value);
     }
    }
    price(value)
    {
      if(this.prices.indexOf(value)>=0){
          var index=this.prices.indexOf(value);
         this.prices.splice(index,1);

      }else{
       this.prices.push(value);
     }

    }
submit(){
  let dict ={
      userid:localStorage.getItem('benfit_userid'),
      pricemin:this.timeMin2,
      pricemax:this.timeMax2,
      discounts:this.discounts,
      categories:this.categoriesselect,
      };
      this.common.presentLoading();
      this.api.post('filter_product', dict,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
        if(res.status==1){
          this.dismiss(res.data);
        }else
        {
          this.common.presentToast(res.message,'danger');
        }
        },
        err => {
        });
}   
getproductcategory()
{
  this.common.presentLoading();
      this.api.post('getallproductcategories', '','').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
        if(res.status==1){
          this.categories=res.data;     
        }else
        {
          this.common.presentToast(res.message,'danger');
        }
        },
        err => {
        });
}
  dismiss(data) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      '': true,
      data:data
    });
  }

}
