import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-question16',
  templateUrl: './question16.page.html',
  styleUrls: ['./question16.page.scss'],
})
export class Question16Page implements OnInit {
stressed:any;
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

  ngOnInit() {
  }
   ionViewDidEnter()
  {
    this.stressed=localStorage.getItem('stressed');
    if(this.errors.indexOf(this.stressed)>=0)
    {
      this.stressed='No';
    }
  }
    submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.stressed) >= 0 ){
        return false;
      }else{
         let dict ={
            stressed: this.stressed,
            question:16,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('stressed',this.stressed);
            this.api.navCtrl.navigateRoot('question17');
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
