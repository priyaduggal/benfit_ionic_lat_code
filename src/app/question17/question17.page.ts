import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question17',
  templateUrl: './question17.page.html',
  styleUrls: ['./question17.page.scss'],
})
export class Question17Page implements OnInit {
motivated:any;
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

  ngOnInit() {
  }
    ionViewDidEnter()
  {
    this.motivated=localStorage.getItem('motivated');
    if(this.errors.indexOf(this.motivated)>=0)
    {
      this.motivated='No';
    }
  }
  submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.motivated) >= 0 ){
        return false;
      }else{
         let dict ={
            motivated: this.motivated,
            question:17,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('motivated',this.motivated);
            this.api.navCtrl.navigateRoot('/completeprofile/uploadphoto');
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
