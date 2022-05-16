import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL;
userid:any;
is_submit_login:boolean=false;
oldpassword:any;
password:any;
cpassword:any;
reg_password:any;
constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) {
this.reg_password=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
}

  ngOnInit() {
  }
  update()
  {
     this.is_submit_login = true;
      if(!this.reg_password.test(String(this.password)) ||
       this.errors.indexOf(this.password) >= 0 ||
       this.errors.indexOf(this.oldpassword) >= 0||
       this.errors.indexOf(this.cpassword) >= 0||
       this.password!=this.cpassword){
      return false;
    }else
    {

      let dict ={
      oldpassword: this.oldpassword,
      password: this.password,
      userid:localStorage.getItem('benfit_userid')
      };
      this.common.presentLoading();
      this.api.post('changepassword', dict,'').subscribe((result) => {
      this.is_submit_login = false;
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
        this.oldpassword='';
        this.password='';
        this.cpassword='';
        this.common.presentToast(res.message,'success');
      }else{
         this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });


    }
  }


}
