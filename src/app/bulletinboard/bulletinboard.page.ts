import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-bulletinboard',
  templateUrl: './bulletinboard.page.html',
  styleUrls: ['./bulletinboard.page.scss'],
})
export class BulletinboardPage implements OnInit {
date:any;
events:any=[];
  constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { }

   ionViewDidEnter()
  {
   this.gettodayevents();
  }

  gettodayevents(){
     let dict ={
      date: new Date(),
      };
      this.common.presentLoading();
        this.api.post('getevents',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.events=res.data; 
          }else
          {
          this.common.presentToast(res.message,'danger');
          }
        },
      err => {
      });
  }

  ngOnInit() {
  }
  onChange(event) {
   
    let dict ={
      date: event.format('DD-MM-YYYY'),
      };
      this.common.presentLoading();
        this.api.post('getevents',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.events=res.data; 
          }else
          {
          this.common.presentToast(res.message,'danger');
          }
        },
      err => {
      });
  }

}
