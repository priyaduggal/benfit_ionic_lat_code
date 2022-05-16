import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-question11',
  templateUrl: './question11.page.html',
  styleUrls: ['./question11.page.scss'],
})
export class Question11Page implements OnInit {
fav_sports:any;
errors:any=['',null,undefined];
sports:any=[];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) {
  this.sports=['rugby','cricket','roller skating','table tennis','Soccer','Basketball','tennis','baseball','golf','running','volleyball','badminton','swimming','boxing'];
   }

  ngOnInit() {
  }
    ionViewDidEnter()
  {
    this.fav_sports=localStorage.getItem('fav_sports');
  }
   submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.fav_sports) >= 0 ){
        return false;
      }else{
         let dict ={
            fav_sports: this.fav_sports,
            question:11,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('fav_sports',this.fav_sports);
            this.api.navCtrl.navigateRoot('question12');
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
