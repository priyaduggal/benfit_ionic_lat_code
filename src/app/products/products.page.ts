import { ModalController } from '@ionic/angular';
import { FilterpagePage } from './filterpage/filterpage.page';
import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';
import { QuickbuyPage } from '../quickbuy/quickbuy.page';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
categories=[];
products:any=[];
userid:any;
keyword:any;
datapro=false;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
slideOpts = {
initialSlide: 0,
speed: 400,
slidesPerView: 3.7,
};

  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService,public modalController: ModalController) {
	
  }

  getorprice(price,discount){

    return (price - ( price * discount / 100 )).toFixed(2); // Sale price
  }
async buy(productid)
  {
    const modal = await this.modalController.create({
    component: QuickbuyPage,
    cssClass: 'jointeamconfirm',
    componentProps: {
    id:productid,
    }
    });

    modal.onDidDismiss().then((detail) => {
    if(this.errors.indexOf(detail.data)==-1)
    {
  
    }

    });
    return await modal.present();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterpagePage,
      cssClass: 'filtermodal'
    });

    modal.onDidDismiss().then((detail) => {
    if(this.errors.indexOf(detail?.data)==-1)
    {
    
    this.products=detail.data.data;  
    }
    });
    return await modal.present();
  }
ionViewDidEnter()
    {
      this.userid=localStorage.getItem('benfit_userid'),
      this.getproductcategory();
      this.getproducts();
    }
    change(event){
      let dict ={
      text:event.target.value,
      };
      
      this.api.post('searchproduct',dict,'').subscribe((result) => {
      var res;
      res = result;
        $('.products').removeClass('active');
        $('.productsall').addClass('active');
      if(res.status==1){
        this.products=res.data; 
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
    }
showproducts(id)
{
   let dict ={
      userid:localStorage.getItem('benfit_userid'),
      catid:id,
      };
      
      this.api.post('getproductswithcat',dict,'').subscribe((result) => {
      var res;
      res = result;
      $('.products').removeClass('active');
      $('.products'+id).addClass('active');
      if(res.status==1){
       this.products=res.data;     
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
  
      this.api.post('getallproductcategories', '','').subscribe((result) => {
     
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
showimage(image)
{
  if(this.errors.indexOf(image)==-1){
        var im=image.split(",");
      return this.IMAGES_URL+'/'+im[0];
    }
}
getproducts()
{
 let dict ={
    userid:localStorage.getItem('benfit_userid'),
    };
      
      this.api.post('getallproducts',dict,'').subscribe((result) => {
      $('.products').removeClass('active');
      $('.productsall').addClass('active');
      var res;
      res = result;
        if(res.status==1){
          this.products=res.data; 
          if(res.data.length>0)
          {
            this.datapro=true;
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
