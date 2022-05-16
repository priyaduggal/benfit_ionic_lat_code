import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodrecomendation',
  templateUrl: './foodrecomendation.page.html',
  styleUrls: ['./foodrecomendation.page.scss'],
})
export class FoodrecomendationPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 2.2,
  };

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
