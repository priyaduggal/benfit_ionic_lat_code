import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import {ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import { ModalController,NavParams } from '@ionic/angular';
import {CommonService} from '../services/common.service';
@Component({
  selector: 'app-deleteblog',
  templateUrl: './deleteblog.page.html',
  styleUrls: ['./deleteblog.page.scss'],
})
export class DeleteblogPage implements OnInit {
id:any;
title:any;
errors:any=[0,'',null,undefined];
  constructor(public navParams: NavParams,public api:ApiService,
    public modalController: ModalController,
    private common: CommonService) { 
  this.id=navParams.get('blogid'); 
  this.title=navParams.get('title'); 

}

  ngOnInit() {
  }
   dismiss()
  {
    this.modalController.dismiss({
      'dismissed': true
    });

  }
  delete()
  {
    if(this.errors.indexOf(this.title)>=0){
 const data = {
      id: this.id,
      };
     this.common.presentLoading();
      this.api.post('deleteblog',data,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){

        this.dismiss();
         this.common.presentToast('Blog deleted successfully','danger');
      }else{
         this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
    }else{


      const data = {
      id: this.id,
      };
     this.common.presentLoading();
      this.api.post('deleteevent',data,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){

          this.dismiss();
         this.common.presentToast('Event deleted successfully','danger');
      }else{
         this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
    }


  }

}
