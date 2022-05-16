import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
is_submit_login:boolean=false;
reg_exp:any;
otp:any;
errors:any=['',null,undefined];
forgot_email:any;
otpid:any;
constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) {
this.reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 }

  ngOnInit() {
  }
 
  submit()
  {
        this.is_submit_login = true;
        if(this.errors.indexOf(this.forgot_email) >= 0 ||
        !this.reg_exp.test(String(this.forgot_email).toLowerCase())){
        return false; 
        }
        let dict ={
        email: this.forgot_email,
        };

        this.common.presentLoading();
        this.api.post('forgotPass', dict,'').subscribe((result) => {
        this.is_submit_login = false;
        this.common.stopLoading();
        this.forgot_email = '';
        var res;
        res = result;
        if(res.status==1){
          localStorage.setItem('forgot_userid',res.userid);
         this.api.navCtrl.navigateRoot('/resetpassword');
        }else
        {
        this.common.presentToast(res.message,'danger');
        }
        },
        err => {
        });

  }

}
