import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-mealsdietplans',
  templateUrl: './mealsdietplans.page.html',
  styleUrls: ['./mealsdietplans.page.scss'],
})
export class MealsdietplansPage implements OnInit {
glasscount:any;
filled:any=[];
totalcal:any;
calper:any;
totalfat:any;
proper:any;
fatper:any;
carper:any;
intakecar:any;
intakecal:any;
intakepro:any;
intakefat:any;
currentday:any;
IMAGES_URL:any = config.IMAGES_URL; 
categories:any=[];
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) { }
  ionViewDidEnter(){
    this.glasscount=10;
    this.getglass();
    this.getcategories();
    this.getstatistics();
    let curr = new Date 
    var first2 = curr.getDate() ; 
    this.currentday = new Date(curr.setDate(first2)).toISOString().substring(0, 10)

  }
  getday(date){
var weekday = ["Sunday","Monday","Tueday","Wedday","Thuday","Friday","Satday"];
var a = new Date(date);
return weekday[a.getDay()];
}
getmonth(date)
{
  var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date(date);
return month[d.getMonth()];
}
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 2.5,
  };
  
  showToolbar = false;
  getstatistics(){


  let curr = new Date 
  var first = curr.getDate() - curr.getDay() + 1 ;
  var from = new Date(curr.setDate(first)).toISOString().substring(0, 10);
  var last = curr.getDate() - curr.getDay() + 6 ;
  var to = new Date(curr.setDate(last)).toISOString().substring(0, 10);
      let dict={
        'id':localStorage.getItem('benfit_userid'),
        'from':from,
       'to':to,
      }
      this.api.post('getallstatisticsmeals', dict,'').subscribe((result) => {
     
      var res;
      res = result;
      if(res.status==1){
         var intakecal=res.calintake;
         var totalcal=res.getcalories;

         var intakefat=res.fatintake;
         var totalfat=res.getfat;

         var intakepro=res.prointake;
         var totalpro=res.getproteins;


         var intakecar=res.carintake;
         var totalcar=res.getcarbohydrate;

         this.calper=intakecal/ totalcal * 100;
         this.fatper=intakefat/ totalfat * 100;
         this.proper=intakepro/ totalpro * 100;
        this.carper=intakecar/ totalcar * 100;

         this.intakecal=intakecal;
         this.intakefat=intakefat;
         this.intakepro=intakepro;
         this.intakecar=intakecar;
      }else
      {
      this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });

  }
  getcategories(){
      let dict={
        'id':localStorage.getItem('benfit_userid'),
      }
      this.api.post('getusersjoinedcategories', dict,'').subscribe((result) => {
     
      var res;
      res = result;
      if(res.status==1){
         this.categories=res.data;
      }else
      {
      this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
  }
  getglass(){
     this.common.presentLoading();
      let dict={
        'id':localStorage.getItem('benfit_userid'),
      }
      this.api.post('getfilledglasstoday', dict,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
         this.filled=res.data;
      }else
      {
      this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
  }
  addglass(){
      this.common.presentLoading();
      let dict={
        'id':localStorage.getItem('benfit_userid'),
      }
      this.api.post('add_glass', dict,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
         this.filled=res.data;
      }else
      {
      this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
  }
  onScroll($event) 
  {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 100;
    }
  }

  ngOnInit() {
  }

}
