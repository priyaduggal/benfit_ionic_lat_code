import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.page.html',
  styleUrls: ['./receipes.page.scss'],
})
export class ReceipesPage implements OnInit {
receipes=[];
subreceipes:any=[];
userid:any;
keyword:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) { }
  
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 4.6,
  };
  
  imgpath : any = "assets/images/heart.svg";
  imgpath1 : any = "assets/images/selectedheart.svg";
  changeImg(){
    this.imgpath = this.imgpath1
  }
  
  showToolbar = false;

  onScroll($event) 
  {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 100;
    }
  }
  ionViewDidEnter()
    {
      this.userid=localStorage.getItem('benfit_userid'),
      this.getreceipescategory();
      this.getreceipes();
    }
    change(event)
    {
      console.log(event.target.value);
       let dict ={
      userid:localStorage.getItem('benfit_userid'),
      text:event.target.value,
      };
      
      this.api.post('searchreceipe',dict,'').subscribe((result) => {
      var res;
      res = result;
      $('.categories').removeClass('active');
      $('.categoriesall').addClass('active');
      
      if(res.status==1){
       this.subreceipes=res.data; 
       console.log(this.subreceipes);    
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
    }
    showreceipes(catid)
    {
      let dict ={
      userid:localStorage.getItem('benfit_userid'),
      catid:catid,
      };
      
      this.api.post('getreceipeswithcat',dict,'').subscribe((result) => {
      var res;
      res = result;
      $('.categories').removeClass('active');
      $('.categories'+catid).addClass('active');
      if(res.status==1){
       this.subreceipes=res.data;     
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });

    }
    getreceipes()
    {
    let dict ={
    userid:localStorage.getItem('benfit_userid'),
    };
      
      this.api.post('getsubreceipes',dict,'').subscribe((result) => {
      $('.categories').removeClass('active');
      $('.categoriesall').addClass('active');
      var res;
      res = result;
        if(res.status==1){
          this.subreceipes=res.data;     
        }else
        {
          this.common.presentToast(res.message,'danger');
        }
        },
        err => {
        });
    }
    getreceipescategory()
    {
      this.common.presentLoading();
      this.api.post('getalleceipes', '','').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
        if(res.status==1){
          this.receipes=res.data;     
        }else
        {
          this.common.presentToast(res.message,'danger');
        }
        },
        err => {
        });
    }
    markfavorite(resid,index)
    {
    let dict ={
    userid:localStorage.getItem('benfit_userid'),
    resid:resid,
    };
     this.common.presentLoading();
      this.api.post('markfavunfavorite', dict,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
        if(res.status==1){
          this.subreceipes[index].favorite=1;
          this.common.presentToast('Receipe added to favorites successfully','success');
        }else if(res.status==2)
        {
          this.subreceipes[index].favorite=0;
          this.common.presentToast('Receipe removed from favorites successfully','danger');
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
