import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-videoguide',
  templateUrl: './videoguide.page.html',
  styleUrls: ['./videoguide.page.scss'],
})
export class VideoguidePage implements OnInit {
userid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
videos:any=[];
constructor(private common: CommonService,
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
      type:1,
      };
            this.common.presentLoading();
            this.api.post('Getfullguides', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
              this.videos=res.data; 
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });
  }

}
