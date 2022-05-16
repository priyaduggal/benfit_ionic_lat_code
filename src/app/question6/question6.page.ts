import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-question6',
  templateUrl: './question6.page.html',
  styleUrls: ['./question6.page.scss'],
})
export class Question6Page implements OnInit {
metabolic_rate:any;
errors:any=['',null,undefined];
regex:any;
dob:any;
today:any;
age:any;
weigth:any;
height:any;
is_submit_signup:boolean=false;
constructor(public router:Router,private common: CommonService,public api:ApiService) {
this.regex=/^[0-9]*$/;
}
 ionViewDidEnter()
  {

var gender=localStorage.getItem('gender');
//women= 655.1 + (9.6 × body weight [kg]) + (1.8 × height [cm]) - (4.7 × age [years])
//men= 66.47 + (13.7 × body weight [kg]) + (5 × height [cm]) - (6.8 × age [years])
this.dob = new Date(localStorage.getItem('dob'));
this.today = new Date();
this.age = Math.floor((this.today-this.dob) / (365.25 * 24 * 60 * 60 * 1000));
this.height = localStorage.getItem('height');
this.weigth = localStorage.getItem('weight');

if(gender=='F')
{
   this.metabolic_rate=655.1 + 
   (9.6 * this.weigth) + (1.8 * this.height) - (4.7 * this.age);
   this.metabolic_rate=this.metabolic_rate.toFixed(2);
}else{
 
 this.metabolic_rate=66.47 + (13.7 * this.weigth) + 
 (5 * this.height) - (6.8 * this.age);
 this.metabolic_rate=this.metabolic_rate.toFixed(2);

}
    
  }
   submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.metabolic_rate) >= 0 ){
        return false;
      }else{
           let dict ={
            metabolic_rate: this.metabolic_rate,
            question: 6,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('metabolic_rate',this.metabolic_rate);
            this.api.navCtrl.navigateRoot('question7');
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });
      }
    }

  ngOnInit() {
  }

}
