import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-aim',
  templateUrl: './aim.page.html',
  styleUrls: ['./aim.page.scss'],
})
export class AimPage implements OnInit {
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
aim_type:any;
aim_explain:any;
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
    this.aim_type=localStorage.getItem('aim_type');
    this.showInput1(this.aim_type);
    this.aim_explain=localStorage.getItem('aim_explain');
   
  }
  shInput : boolean = false;
  showInput1(type){ 
    this.aim_explain='';
    $('.typed').removeClass('show');
    $('.typed').addClass('hide');
    $('.'+type).toggleClass( "show" );
    this.aim_type=type;
    }

  submit(){
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.aim_type) >= 0 || this.errors.indexOf(this.aim_explain) >= 0 ){
        return false;
      }else{

        let dict ={
            aim_type: this.aim_type,
            aim_explain:this.aim_explain,
            question:'aim',
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('aim_type',this.aim_type);
            localStorage.setItem('aim_explain',this.aim_explain);
            this.api.navCtrl.navigateRoot('/activitylevel');
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
