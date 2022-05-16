import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-podcastdetails',
  templateUrl: './podcastdetails.page.html',
  styleUrls: ['./podcastdetails.page.scss'],
})
export class PodcastdetailsPage implements OnInit {
  podcastab: any ='podcasts';

  details:any=[];
podid:any;
userid:any;
IMAGES_URL:any = config.IMAGES_URL; 
errors:any=[0,'',null,undefined];
constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { 
this.podid = activatedRoute.snapshot.paramMap.get('id');

}
 ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getpdetails();
  }

  getpdetails(){
      let dict ={
      id: this.podid,
      };
        this.common.presentLoading();
        this.api.post('getpodepisodes',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.details=res.data; 
         
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
