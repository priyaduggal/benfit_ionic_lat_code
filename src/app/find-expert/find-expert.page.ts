import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-expert',
  templateUrl: './find-expert.page.html',
  styleUrls: ['./find-expert.page.scss'],
})
export class FindExpertPage implements OnInit {
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

}
