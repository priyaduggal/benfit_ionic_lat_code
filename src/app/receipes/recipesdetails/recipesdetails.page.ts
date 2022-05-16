import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-recipesdetails',
  templateUrl: './recipesdetails.page.html',
  styleUrls: ['./recipesdetails.page.scss'],
})
export class RecipesdetailsPage implements OnInit {
userid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
resid:any;
details:any;
ingredients:any=[];
constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) {
this.resid = activatedRoute.snapshot.paramMap.get('id');
 }

  ngOnInit() {
  }
  addtocart(id,i,quantity){
       let dict ={
      userid:localStorage.getItem('benfit_userid'),
      ingid: id,
      productid: '',
      type:'',
      quantity:quantity,
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
  decrement(index){
    if(this.ingredients[index].quantity>1){
    this.ingredients[index].quantity=this.ingredients[index].quantity-1;
  }
  }
 increment (index) {
    
    this.ingredients[index].quantity=this.ingredients[index].quantity+1;
   
  }
   ionViewDidEnter()
  {
    this.userid=localStorage.getItem('benfit_userid'),
    this.getdetails();
  }

  getdetails()
  {

     let dict ={
      resid: this.resid,
      };
      this.common.presentLoading();
        this.api.post('getreceipes_details',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.details=res.data; 
          this.ingredients= res.ing;
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });
  }

}
