import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question14',
  templateUrl: './question14.page.html',
  styleUrls: ['./question14.page.scss'],
})
export class Question14Page implements OnInit {
foods_like:any;
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }


  ngOnInit() {
  }
  ionViewDidEnter()
  {
    this.foods_like=localStorage.getItem('foods_like');
  }
   submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.foods_like) >= 0 ){
        return false;
      }else{
         let dict ={
            foods_like: this.foods_like,
            question:14,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('foods_like',this.foods_like);
            this.api.navCtrl.navigateRoot('question15');
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
