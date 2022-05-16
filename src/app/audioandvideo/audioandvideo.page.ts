import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-audioandvideo',
  templateUrl: './audioandvideo.page.html',
  styleUrls: ['./audioandvideo.page.scss'],
})
export class AudioandvideoPage implements OnInit {
userid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
video:any=[];
audio:any=[];
  constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 1.3,
  };

   ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getguides();
   this.aguides();
  }
 aguides(){
  
            this.api.post('Getaudioguides', '','').subscribe((result) => {
          
            var res;
            res = result;
            if(res.status==1){
              this.audio=res.data; 
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });
 }
  getguides(){
             this.common.presentLoading();
            this.api.post('Getallguides', '','').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
              this.video=res.data; 
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

}
