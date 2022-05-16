import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-signup-new',
  templateUrl: './signup-new.page.html',
  styleUrls: ['./signup-new.page.scss'],
})
export class SignupNewPage implements OnInit {
email:any;
is_submit_signup:boolean=false;
password:any;
reg_password:any;
reg_exp_email:any;
errors:any=['',null,undefined];
first_name:any;
last_name:any;
confirm_password:any;
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) {
this.reg_password=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
this.reg_exp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
}

 hidePass : boolean = true;
  myFunction() {
    this.hidePass = !this.hidePass;
  }

  hidePass1 : boolean = true;
  myFunction1() {
    this.hidePass1 = !this.hidePass1;
  }
  ngOnInit() {
  }
  submit(){
            this.is_submit_signup = true;
            if(this.errors.indexOf(this.email) >= 0 ||
            !this.reg_exp_email.test(String(this.email).toLowerCase()) ||
            !this.reg_password.test(String(this.password)) ||
            this.errors.indexOf(this.password) >= 0 ||
            this.errors.indexOf(this.first_name) >= 0 ||
            this.errors.indexOf(this.last_name) >= 0 ||
            this.password!=this.confirm_password
      ){
      return false;
      }else
      {
            let dict ={
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            status:1,
            };
            this.common.presentLoading();
            this.api.post('signupUser', dict,'').subscribe((result) => {
            this.is_submit_signup = false;
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('benfit_userid',res.data.id);
            this.email = '';
            this.password = '';
            this.first_name = '';
            this.last_name = '';  
            this.api.navCtrl.navigateRoot('choosegender');
            this.common.presentToast('REGISTERED SUCCESSFULLY !.','success');
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
