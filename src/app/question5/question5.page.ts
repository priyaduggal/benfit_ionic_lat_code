import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.page.html',
  styleUrls: ['./question5.page.scss'],
})
export class Question5Page implements OnInit {
height:any;
type:any;
errors:any=['',null,undefined];
regex:any;
is_submit_signup:boolean=false;
constructor(public router:Router,private common: CommonService,public api:ApiService) {
this.regex=/^[0-9]*$/;
}
 ionViewDidEnter()
  {

    this.height=localStorage.getItem('height');
    if(this.errors.indexOf( this.height)>=0)
    {
      this.type='Cm';
       $('input:radio[name="type"]').filter('[value='+this.type+']').attr('checked', true);
    }else if(this.errors.indexOf( this.height)==-1)
    {
      this.type=localStorage.getItem('height_type');
       $('input:radio[name="type"]').filter('[value='+this.type+']').attr('checked', true);
    }
   
  }
 submit()
  {
     this.is_submit_signup = true;
      if(this.errors.indexOf(this.type) >= 0 ||
            !this.regex.test(String(this.height)) ||
            this.errors.indexOf(this.height) >= 0 
      ){
        return false;
      }else{

           let dict ={
            type: this.type,
            height:this.height,
            question: 5,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('height',this.height);
            localStorage.setItem('height_type',this.type);
            this.api.navCtrl.navigateRoot('question7');
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
