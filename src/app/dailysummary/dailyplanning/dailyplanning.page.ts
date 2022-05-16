import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailyplanning',
  templateUrl: './dailyplanning.page.html',
  styleUrls: ['./dailyplanning.page.scss'],
})
export class DailyplanningPage implements OnInit {

  showToolbar = false;

  onScroll($event) 
  {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 100;
    }
  }

  
  constructor() { }

  ngOnInit() {
  }

}
