import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.page.html',
  styleUrls: ['./question4.page.scss'],
})
export class Question4Page implements OnInit {
weight:any;
type:any;
errors:any=['',null,undefined];
regex:any;is_submit_signup:boolean=false;
constructor(public router:Router,private common: CommonService,public api:ApiService) {
this.regex=/^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;
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
            goal_weight:this.weight,
            question: 4,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('goal_weight',this.weight);
            localStorage.setItem('weight_goal_type',this.type);
            this.api.navCtrl.navigateRoot('question5');
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

    this.weight=localStorage.getItem('goal_weight');
    if(this.errors.indexOf( this.weight)>=0)
    {
      this.type='Kg';
       $('input:radio[name="type"]').filter('[value='+this.type+']').attr('checked', true);
    }else if(this.errors.indexOf( this.weight)==-1)
    {
      this.type=localStorage.getItem('weight_goal_type');
       $('input:radio[name="type"]').filter('[value='+this.type+']').attr('checked', true);
    }
   
  }
  ngOnInit() {
  }

}
