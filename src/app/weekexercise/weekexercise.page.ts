import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-weekexercise',
  templateUrl: './weekexercise.page.html',
  styleUrls: ['./weekexercise.page.scss'],
})
export class WeekexercisePage implements OnInit {
firstday:any;
currentday:any;
totalcal:any;calper:any;
totalfat:any;proper:any;
fatper:any;intakecal:any;
intakefat:any;
totalpro:any;intakepro:any;
categories:any=[];
IMAGES_URL:any = config.IMAGES_URL; 
showToolbar = false;
week = [];
savemeal(id,catindex,index)
{
 $('.checkbox'+catindex+index).attr('disabled',true);
      let dict={
        'id':localStorage.getItem('benfit_userid'),
        'mealid':id,
      }
      this.api.post('insertmeal', dict,'').subscribe((result) => {
      var res;
      res = result;
      if(res.status==1){
        this.getcategories();
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
getday(date){
var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var a = new Date(date);
return weekday[a.getDay()];
}
ionViewDidEnter(){
let curr = new Date 

var first1 = curr.getDate() ; 
this.firstday = new Date(curr.setDate(first1)).toISOString().substring(0, 10)
this.currentday = new Date(curr.setDate(first1)).toISOString().substring(0, 10)

for (let i = 1; i <= 7; i++) {
let first = curr.getDate() - curr.getDay() + i 
let day = new Date(curr.setDate(first)).toISOString().substring(0, 10)
this.week.push(day)

}
this.getcategories();
 }
 getmeals(date){
  this.firstday=date;
  this.getcategories();
 }
 getcategories(){
      let dict={
        'id':localStorage.getItem('benfit_userid'),
        'date':this.firstday,
      }
      this.api.post('getusersjoinedcategorieswithdate', dict,'').subscribe((result) => {
      var res;
      res = result;
      if(res.status==1){
         this.categories=res.data;

         var intakecal=res.calintake;
         var totalcal=res.getcalories;

         var intakefat=res.fatintake;
         var totalfat=res.getfat;

         var intakepro=res.prointake;
         var totalpro=res.getproteins;

         this.calper=intakecal/ totalcal * 100;
         this.fatper=intakefat/ totalfat * 100;
         this.proper=intakepro/ totalpro * 100;
         this.intakecal=intakecal;
         this.intakefat=intakefat;
         this.intakepro=intakepro;
        
      }else
      {
      this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
  }
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) { }

  ngOnInit() {
  }

}
