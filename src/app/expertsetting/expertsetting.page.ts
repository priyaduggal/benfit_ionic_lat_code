import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
@Component({
  selector: 'app-expertsetting',
  templateUrl: './expertsetting.page.html',
  styleUrls: ['./expertsetting.page.scss'],
})
export class ExpertsettingPage implements OnInit {
userid:any;
userdetails:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) { }


  ngOnInit() {
  }
  ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getdetails();
  }

  getdetails()
  {
  let dict ={
      userid:localStorage.getItem('benfit_userid'),
      };
      
      this.api.post('getuserdetails',dict,'').subscribe((result) => {
      var res;
      res = result;
      if(res.status==1){
       this.userdetails=res.data; 
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
  }
   logout()
  {

    localStorage.setItem('is_logged_in', 'false');
    localStorage.clear(); 
    this.api.navCtrl.navigateRoot('login');
  }

}
