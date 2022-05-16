import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.page.html',
  styleUrls: ['./question2.page.scss'],
})
export class Question2Page implements OnInit {
dob:any;
type:any;
errors:any=['',null,undefined];
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }
  ngOnInit() {
  }
ionViewDidEnter()
  {
    this.dob=localStorage.getItem('dob');
   
  }

  submit()
  {
  if(this.errors.indexOf(this.dob)>=0){
       this.common.presentToast('Please enter date of birth !','danger');
    }else{
        let dict ={
            dob: this.dob,
            question: 2,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('dob',this.dob);
            this.api.navCtrl.navigateRoot('question3');
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
