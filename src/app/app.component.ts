import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router,private platform: Platform,  private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
   this.initializeApp();

  }
   initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

       if(localStorage.getItem('is_logged_in') == 'true'){
        // alert('here');tabs/tab1
        if(localStorage.getItem('user_type')=='1')
        {
        this.router.navigate(['/tabs/home-new']);
      }else{
        this.router.navigate(['/expertprofile']);
      }
      }else{
        this.router.navigate(['/login']);
      } 
    });
  }
}
