import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.page.html',
  styleUrls: ['./changeemail.page.scss'],
})
export class ChangeemailPage implements OnInit {
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL;
userid:any;
newemail:any;
is_submit_login:boolean=false;
oldpassword:any;
password:any;
email:any;
cpassword:any;
userdetails:any;
reg_exp_email:any;
 constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) {
this.reg_exp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   

}
  ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getdetails();
  }

  getdetails()
  {
  let dict ={
      userid:localStorage.getItem('benfit_userid'),
      };
       this.common.presentLoading();
      this.api.post('getuserdetails',dict,'').subscribe((result) => {
      var res;
        this.common.stopLoading();
      res = result;
      if(res.status==1){
       this.userdetails=res.data; 
       this.email=this.userdetails.email;
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
  }

  update()
    {
      this.is_submit_login = true;
      if(this.errors.indexOf(this.newemail) >= 0 ||!this.reg_exp_email.test(String(this.newemail).toLowerCase()))
      {
        return false;
      }else
      {
        
            let dict ={
            userid:localStorage.getItem('benfit_userid'),
            newemail: this.newemail,
            };
            this.common.presentLoading();
            this.api.post('updatemail', dict,'').subscribe((result) => {
            this.is_submit_login = false;
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
         
            this.newemail = '';
           
            this.api.navCtrl.navigateRoot('/settings');
            this.common.presentToast('SAVED SUCCESSFULLY !.','success');
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });
      }
  }

  ngOnInit() {
  }

}
