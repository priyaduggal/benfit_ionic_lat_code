import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-tabatadetails',
  templateUrl: './tabatadetails.page.html',
  styleUrls: ['./tabatadetails.page.scss'],
})
export class TabatadetailsPage implements OnInit {
userid:any;
pid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
details:any=[];
constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) {
this.pid = activatedRoute.snapshot.paramMap.get('id');
}
 ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getguidedetails();
  }
  getguidedetails(){
    let dict ={
      id:this.pid,
      };
            this.common.presentLoading();
            this.api.post('getGuidedetails', dict,'').subscribe((result) => {
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
