import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-activitylevel',
  templateUrl: './activitylevel.page.html',
  styleUrls: ['./activitylevel.page.scss'],
})
export class ActivitylevelPage implements OnInit {
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
activity_level:any;
constructor(public router:Router,private common: CommonService,public api:ApiService) { }

showInput(type)
{

  $('.activity').removeClass('active');
  $('.'+type).addClass('active');
  this.activity_level=type;

}
ngOnInit() {
} 
ionViewDidEnter()
  {
    this.activity_level=localStorage.getItem('activity_level');
    if(this.errors.indexOf(this.activity_level)==-1){
      this.showInput(this.activity_level);
    }
   
  }

submit(){
  this.is_submit_signup = true;
  if(this.errors.indexOf(this.activity_level) >= 0 ){
    return false;
  }else{
     let dict ={
            activity_level: this.activity_level,
            question:'activity',
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('activity_level',this.activity_level);
            this.api.navCtrl.navigateRoot('/subscriptions');
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
