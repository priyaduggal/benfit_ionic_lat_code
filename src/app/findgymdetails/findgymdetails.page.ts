import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findgymdetails',
  templateUrl: './findgymdetails.page.html',
  styleUrls: ['./findgymdetails.page.scss'],
})
export class FindgymdetailsPage implements OnInit {
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
