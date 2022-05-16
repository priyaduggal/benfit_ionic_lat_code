import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findgym',
  templateUrl: './findgym.page.html',
  styleUrls: ['./findgym.page.scss'],
})
export class FindgymPage implements OnInit {
  showToolbar = false;

onScroll($event)
{
if ($event && $event.detail && $event.detail.scrollTop) {
 const scrollTop = $event.detail.scrollTop;
 this.showToolbar = scrollTop >= 30;
}
}
  constructor() {

	  }

  ngOnInit() {
  }
hideMe1=false;
  toggleClass1(){
  this.hideMe1=!this.hideMe1;
}
}
