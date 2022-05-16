import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../../config';
import { GlobalFooService } from '../../../services/globalFooService.service';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.page.html',
  styleUrls: ['./blogdetails.page.scss'],
})
export class BlogdetailsPage implements OnInit {
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
blogs:any=[];
userid:any;
blogid:any;
details:any;
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) {
this.blogid = activatedRoute.snapshot.paramMap.get('id');
 }

  ngOnInit() {
  }

   ionViewDidEnter()
  {
    this.userid=localStorage.getItem('benfit_userid'),
    this.getdetails();
  }

  getdetails()
  {

let dict ={
      blogid: this.blogid,
      };
      this.common.presentLoading();
        this.api.post('getblog_details',dict,'').subscribe((result) => {
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


}
