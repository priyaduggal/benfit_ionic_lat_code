import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email:any;
is_submit_login:boolean=false;
password:any;
reg_password:any;
reg_exp_email:any;
errors:any=['',null,undefined];
constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) {
  this.reg_password=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  this.reg_exp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
}

  ngOnInit() {
  }

  login(){
     this.is_submit_login = true;
       if(this.errors.indexOf(this.email) >= 0 ||
      !this.reg_exp_email.test(String(this.email).toLowerCase()) ||
     // !this.reg_password.test(String(this.password)) ||
       this.errors.indexOf(this.password) >= 0){
      return false;
    }else
    {
       let dict ={
      email: this.email,
      password: this.password,
    };
      this.common.presentLoading();
      this.api.post('loginUser', dict,'').subscribe((result) => {
      this.is_submit_login = false;
      this.common.stopLoading();
      this.email = '';
      this.password = '';
      var res;
      res = result;
      if(res.status==1){
              var userId = this.api.encryptData(res.data.id,config.ENC_SALT);
              localStorage.setItem('benfit_userid',res.data.id);
              localStorage.setItem('benfit_token',userId);
              localStorage.setItem('is_logged_in','true');
              localStorage.setItem('user_type',res.data.type);
              localStorage.setItem('benfit_data',JSON.stringify(res.data));
              this.globalFooService.publishSomeData({
              foo: {'data': res.data}
              });

              if(res.data.type==1){
              if(this.errors.indexOf(res.data.question_status) >= 0){
              this.api.navCtrl.navigateRoot('choosegender');
              }else if(res.data.question_status==1){
              this.api.navCtrl.navigateRoot('question2');
              }else if(res.data.question_status==2){
              this.api.navCtrl.navigateRoot('question3');
              }else if(res.data.question_status==3){
              this.api.navCtrl.navigateRoot('question4');
              }else if(res.data.question_status==4){
              this.api.navCtrl.navigateRoot('question5');
              }else if(res.data.question_status==5){
              this.api.navCtrl.navigateRoot('question6');
              }else if(res.data.question_status==6){
              this.api.navCtrl.navigateRoot('question7');
              }else if(res.data.question_status==7){
              this.api.navCtrl.navigateRoot('question8');
              }else if(res.data.question_status==8){
              this.api.navCtrl.navigateRoot('question9');
              }else if(res.data.question_status==9){
              this.api.navCtrl.navigateRoot('question10');
              }else if(res.data.question_status==10){
              this.api.navCtrl.navigateRoot('question11');
              }else if(res.data.question_status==11){
              this.api.navCtrl.navigateRoot('question12');
              }else if(res.data.question_status==12){
              this.api.navCtrl.navigateRoot('question13');
              }else if(res.data.question_status==13){
              this.api.navCtrl.navigateRoot('question14');
              }else if(res.data.question_status==14){
              this.api.navCtrl.navigateRoot('question15');
              }else if(res.data.question_status==15){
              this.api.navCtrl.navigateRoot('question16');
              }else if(res.data.question_status==16){
              this.api.navCtrl.navigateRoot('question17');
              }else if(res.data.question_status==17){
              this.api.navCtrl.navigateRoot('/completeprofile/uploadphoto');
              }else if(res.data.question_status=='upload'){
              this.api.navCtrl.navigateRoot('aim');
              }else if(res.data.question_status=='aim'){
              this.api.navCtrl.navigateRoot('activitylevel');
              }else if(res.data.question_status=='activity'){
              this.api.navCtrl.navigateRoot('/tabs/home-new');
              }else{
              this.api.navCtrl.navigateRoot('/tabs/home-new');
              }

            }else{
              this.api.navCtrl.navigateRoot('/expertprofile');
            }



              //this.router.navigate(['/tabs/home']);
            //  this.api.navCtrl.navigateRoot('tabs/tab1');
              this.common.presentToast('LOGGED IN SUCCESSFULLY !.','success');
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
