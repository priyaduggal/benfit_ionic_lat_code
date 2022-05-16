import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
date:any;errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
userid:any;
inbox:any=[];
keyword:any;
  constructor(private globalFooService: GlobalFooService,
private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { 
  this.globalFooService.getObservable().subscribe((data) => {
 this.getinbox();
  
    });
}

  ngOnInit() {
  }

   ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getinbox();
  }

  getinbox(){

 let dict ={
        id: this.userid,
      };
      this.common.presentLoading();
        this.api.post('getinboxlist',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
           
            this.inbox=res.data;
          
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });

  }
   change(event){
 
      let dict ={
      text:event.target.value,
      userid:this.userid,
      };
      
     this.api.post('searchchat',dict,'').subscribe((result) => {
      var res;
      res = result;
        $('.products').removeClass('active');
      $('.productsall').addClass('active');
      
      if(res.status==1){
       this.inbox=res.data; 
      
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });



    }

}

