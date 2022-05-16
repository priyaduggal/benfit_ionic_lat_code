import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.page.html',
  styleUrls: ['./activity-new.page.scss'],
})
export class ActivityNewPage implements OnInit {
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
slideOpts = {
  slidesPerView: 3,
  spaceBetween: 12,
  speed: 400,
  loop:false,
  autoplay:false,
}
}
