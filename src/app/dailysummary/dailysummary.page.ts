import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailysummary',
  templateUrl: './dailysummary.page.html',
  styleUrls: ['./dailysummary.page.scss'],
})
export class DailysummaryPage implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 2.5,
  };

  showToolbar = false;

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
