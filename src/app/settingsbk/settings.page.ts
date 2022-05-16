import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {ApiService } from '../services/api/api.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public router:Router,public api:ApiService) { }

  ngOnInit() {
  }

  logout()
  {

    localStorage.setItem('is_logged_in', 'false');
    localStorage.clear(); 
    this.api.navCtrl.navigateRoot('login');
  }

}
