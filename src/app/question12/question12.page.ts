import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question12',
  templateUrl: './question12.page.html',
  styleUrls: ['./question12.page.scss'],
})
export class Question12Page implements OnInit {
preferences:any;
errors:any=['',null,undefined];
sports:any=[];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

  ngOnInit() {
  }
  set(type)
  {
this.preferences=type;
  }
   ionViewDidEnter()
  
  {
    this.preferences=localStorage.getItem('preferences');
  }
   submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.preferences) >= 0 ){
        return false;
      }else{
         let dict ={
            preferences: this.preferences,
            question:12,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('preferences',this.preferences);
            this.api.navCtrl.navigateRoot('question13');
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
