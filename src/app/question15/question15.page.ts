import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question15',
  templateUrl: './question15.page.html',
  styleUrls: ['./question15.page.scss'],
})
export class Question15Page implements OnInit {
intol:any=[];
intolerances:any;
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { 
    this.intol=['Salicylates','Caffeine','Amines','FODMAPs','Gluten','Dairy','Fructose'];
}
ionViewDidEnter()
  {
    this.intolerances=localStorage.getItem('intolerances');
  }
  ngOnInit() {
  }
    submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.intolerances) >= 0 ){
        return false;
      }else{
         let dict ={
            intolerances: this.intolerances,
            question:15,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('intolerances',this.intolerances);
            this.api.navCtrl.navigateRoot('question16');
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });


      }
    }

}
