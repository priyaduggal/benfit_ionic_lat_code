import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.page.html',
  styleUrls: ['./question8.page.scss'],
})
export class Question8Page implements OnInit {
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
physical_condition:any;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

  ngOnInit() {
  }
  set(type)
  {
    this.physical_condition=type;
  }
ionViewDidEnter()
  {

    this.physical_condition=localStorage.getItem('physical_condition');
  }
   submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.physical_condition) >= 0 ){
        return false;
      }else{
         let dict ={
            physical_condition: this.physical_condition,
            question: 8,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('physical_condition',this.physical_condition);
            this.api.navCtrl.navigateRoot('question9');
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
