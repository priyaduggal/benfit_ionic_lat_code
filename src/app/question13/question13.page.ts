import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question13',
  templateUrl: './question13.page.html',
  styleUrls: ['./question13.page.scss'],
})
export class Question13Page implements OnInit {
disease:any;
errors:any=['',null,undefined];
sports:any=[];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

 ionViewDidEnter()
  {
    this.disease=localStorage.getItem('disease');
  }
  ngOnInit() {
  }
   submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.disease) >= 0 ){
        this.api.navCtrl.navigateRoot('question14');
      }else{
         let dict ={
            disease: this.disease,
            question:13,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('disease',this.disease);
            this.api.navCtrl.navigateRoot('question14');
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
