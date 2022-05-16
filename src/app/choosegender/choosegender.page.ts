import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-choosegender',
  templateUrl: './choosegender.page.html',
  styleUrls: ['./choosegender.page.scss'],
})
export class ChoosegenderPage implements OnInit {
gender:any;
question:any;
errors:any=['',null,undefined];
  constructor(public router:Router,private common: CommonService,public api:ApiService) { }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
    this.gender=localStorage.getItem('gender');
    if(this.errors.indexOf( this.gender)>=0){
    $('input:radio[name="product"]').filter('[value='+this.gender+']').attr('checked', true);
    }
    
  }

  choose(type)
  {
    this.gender=type;
  }

  submit()
  {

    if(this.errors.indexOf(this.gender)>=0){
       this.common.presentToast('Choose gender to continue !','danger');
    }else{
       let dict ={
            gender: this.gender,
            question: 1,
            userid: localStorage.getItem('benfit_userid'),
            };
            this.common.presentLoading();
            this.api.post('UpdateGender', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            localStorage.setItem('gender',this.gender);
            this.api.navCtrl.navigateRoot('question2');
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
