import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookexpert',
  templateUrl: './bookexpert.page.html',
  styleUrls: ['./bookexpert.page.scss'],
})
export class BookexpertPage implements OnInit {

firstday:any;
currentday:any;
categories:any=[];
week = [];
showToolbar = false;

onScroll($event)
{
if ($event && $event.detail && $event.detail.scrollTop) {
 const scrollTop = $event.detail.scrollTop;
 this.showToolbar = scrollTop >= 30;
}
}
  constructor() { }

  ngOnInit() {
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
 }
  getmeals(date){
  this.firstday=date;
 }
}
