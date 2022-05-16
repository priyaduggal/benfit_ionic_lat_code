import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-question10',
  templateUrl: './question10.page.html',
  styleUrls: ['./question10.page.scss'],
})
export class Question10Page implements OnInit {
physical_activity:any;
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.physical_activity=localStorage.getItem('physical_activity');
  }
   submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.physical_activity) >= 0 ){
        return false;
      }else{
         let dict ={
            physical_activity: this.physical_activity,
            question:10,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('physical_activity',this.physical_activity);
            this.api.navCtrl.navigateRoot('question11');
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
