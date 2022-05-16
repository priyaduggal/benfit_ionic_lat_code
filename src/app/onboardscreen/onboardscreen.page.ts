import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboardscreen',
  templateUrl: './onboardscreen.page.html',
  styleUrls: ['./onboardscreen.page.scss'],
})
export class OnboardscreenPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }


}
