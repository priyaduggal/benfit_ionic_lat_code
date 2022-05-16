import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-question9',
  templateUrl: './question9.page.html',
  styleUrls: ['./question9.page.scss'],
})
export class Question9Page implements OnInit {
exercise_often:any;
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

  ngOnInit() {
  }
  ionViewDidEnter()
  {

    this.exercise_often=localStorage.getItem('exercise_often');
  }
  set(type)
  {
    this.exercise_often=type;
  }
  submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.exercise_often) >= 0 ){
        return false;
      }else{
         let dict ={
            exercise_often: this.exercise_often,
            question: 9,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('exercise_often',this.exercise_often);
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
