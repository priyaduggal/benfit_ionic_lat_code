import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page implements OnInit {
weight:any;
type:any;
errors:any=['',null,undefined];
regex:any;is_submit_signup:boolean=false;
constructor(public router:Router,private common: CommonService,public api:ApiService) {


  //this.reg_password=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
this.regex=/^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;
}

  ngOnInit() {
  }
  submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.type) >= 0 ||
            !this.regex.test(String(this.weight)) ||
            this.errors.indexOf(this.weight) >= 0 
      ){
      return false;
      }else{
         let dict ={
            type: this.type,
            weight:this.weight,
            question: 3,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('weight',this.weight);
            localStorage.setItem('weight_type',this.type);
            this.api.navCtrl.navigateRoot('question4');
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });

      }

  }
  ionViewDidEnter()
  {

    this.weight=localStorage.getItem('weight');
    if(this.errors.indexOf( this.weight)>=0)
    {
      this.type='Kg';
       $('input:radio[name="type"]').filter('[value='+this.type+']').attr('checked', true);
    }else if(this.errors.indexOf( this.weight)==-1)
    {
      this.type=localStorage.getItem('weight_type');
       $('input:radio[name="type"]').filter('[value='+this.type+']').attr('checked', true);
    }
   
  }

}
