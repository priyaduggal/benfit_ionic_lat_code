import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
@Component({
  selector: 'app-mealstypedetails',
  templateUrl: './mealstypedetails.page.html',
  styleUrls: ['./mealstypedetails.page.scss'],
})
export class MealstypedetailsPage implements OnInit {
details:any;
ingredients:any=[];
IMAGES_URL:any = config.IMAGES_URL; 
id:any;
errors:any=['',null,undefined];
mid:any;
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
public activatedRoute: ActivatedRoute,
private common: CommonService) {
this.id = activatedRoute.snapshot.paramMap.get('id');
this.mid = activatedRoute.snapshot.paramMap.get('mid');

 }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 3,
  };

  ionViewDidEnter(){
    this.getdetails();
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
  getdetails(){
     this.common.presentLoading();
      let dict={
        'id':this.id,
      }
      this.api.post('getmealdetails', dict,'').subscribe((result) => {
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

  ngOnInit() {
  }

}
