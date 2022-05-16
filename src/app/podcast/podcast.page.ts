import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.page.html',
  styleUrls: ['./podcast.page.scss'],
})
export class PodcastPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 3,
  };

podcasts_fea:any=[];
all:any=[];
userid:any;
IMAGES_URL:any = config.IMAGES_URL; 
errors:any=[0,'',null,undefined];
constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { }


 ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getall();
  }

  getall(){

     this.common.presentLoading();
        this.api.post('getfeaturedpodcast','','').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.podcasts_fea=res.data; 
          this.all=res.all; 
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
