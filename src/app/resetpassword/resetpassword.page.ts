import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
errors:any=['',null,undefined];
password:any;
is_submit_login:boolean=false;
reg_password:any;
cpassword:any;
constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) { 
this.reg_password=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
}

  ngOnInit() {
  }
  save(){
  this.is_submit_login = true;
    if(this.errors.indexOf(this.password) >= 0 ||
    this.errors.indexOf(this.cpassword) >= 0 ||
    !this.reg_password.test(String(this.password)) ||
    this.password!=this.cpassword){
        return false;
    }else
    {
     let dict ={
        password: this.password,
        userId: localStorage.getItem('forgot_userid')
      };
      this.common.presentLoading();
      this.api.post('reset_password', dict,'').subscribe((result) => {
      this.is_submit_login = false;
      this.common.stopLoading();
      this.password = '';
      this.cpassword = '';
      var res;
      res = result;
      if(res.status==1){
        this.api.navCtrl.navigateRoot('login');
        this.common.presentToast('Password reset successfully !.','success');
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
    },
    err => {
    });   
    }

  }
  hidePass : boolean = true;
  myFunction() {
    this.hidePass = !this.hidePass;
  }

}
