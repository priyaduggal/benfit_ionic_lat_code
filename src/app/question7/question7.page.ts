import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-question7',
  templateUrl: './question7.page.html',
  styleUrls: ['./question7.page.scss'],
})
export class Question7Page implements OnInit {
hours:any=[];
hours_sleep:any;
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) {
   this.hours=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];
   }
 ionViewDidEnter()
  {

    this.hours_sleep=localStorage.getItem('hours_sleep');
  }
  ngOnInit() {
  }
    submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.hours_sleep) >= 0 ){
        return false;
      }else{
        let dict ={
            hours_sleep: this.hours_sleep,
            question: 7,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('hours_sleep',this.hours_sleep);
            this.api.navCtrl.navigateRoot('question8');
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
