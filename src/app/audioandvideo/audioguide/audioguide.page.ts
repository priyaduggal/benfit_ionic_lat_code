import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-audioguide',
  templateUrl: './audioguide.page.html',
  styleUrls: ['./audioguide.page.scss'],
})
export class AudioguidePage implements OnInit {
userid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
audios:any=[];
constructor(private globalFooService: GlobalFooService,
private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
    ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getguides();
  }
  getguides(){
    let dict ={
      type:2,
      };
            this.common.presentLoading();
            this.api.post('Getfullguides', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
              this.audios=res.data; 
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });
  }

  view(id)
  {
     let dict ={
            id:id,
            };
            this.common.presentLoading();
            this.api.post('getGuidedetails', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
             localStorage.setItem('url',res.data.video);
              localStorage.setItem('title',res.data.title);
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });
      this.globalFooService.publishSomeData({
      set: {'data': id}
    });
var self=this;
      setTimeout(function(){  
        self.api.navCtrl.navigateRoot('/audioandvideo/audioguide/audioplayer/'+id); }, 2000);
    
  }

}
