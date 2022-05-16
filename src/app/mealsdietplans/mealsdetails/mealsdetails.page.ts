import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
@Component({
  selector: 'app-mealsdetails',
  templateUrl: './mealsdetails.page.html',
  styleUrls: ['./mealsdetails.page.scss'],
})
export class MealsdetailsPage implements OnInit {
meals:any=[];
IMAGES_URL:any = config.IMAGES_URL; 
id:any;
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
public activatedRoute: ActivatedRoute,
private common: CommonService) {
this.id = activatedRoute.snapshot.paramMap.get('id');
 }

 ionViewDidEnter(){
    this.getmeals();
  }

  getmeals(){
    this.common.presentLoading();
      let dict={
        'id':this.id,
      }
      this.api.post('getmealsuserwithcat', dict,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
         this.meals=res.data;
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
