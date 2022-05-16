import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
userdetails:any;
userid:any;
type:any;
errors:any=['',null,undefined];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 2.2,
  };

  showToolbar = false;

ionViewDidEnter(){
 this.userid=localStorage.getItem('benfit_userid');
   this.getdetails();
}
 getdetails()
  {
  let dict ={
      userid:localStorage.getItem('benfit_userid'),
      };
      
      this.api.post('getuserdetails',dict,'').subscribe((result) => {
      var res;
      res = result;
      if(res.status==1){
       this.userdetails=res.data; 
       //based on questions navigate routing 
        this.type=res.data.type;

         if(res.data.type==1){
        if(this.errors.indexOf(this.userdetails.question_status)>=0){
          this.api.navCtrl.navigateRoot('choosegender');
       }else if(this.userdetails.question_status==1){
          this.api.navCtrl.navigateRoot('question2');
       }else if(this.userdetails.question_status==2){
          this.api.navCtrl.navigateRoot('question3');
       }else if(this.userdetails.question_status==3){
          this.api.navCtrl.navigateRoot('question4');
       }else if(this.userdetails.question_status==4){
          this.api.navCtrl.navigateRoot('question5');
       }else if(this.userdetails.question_status==5){
          this.api.navCtrl.navigateRoot('question6');
       }else if(this.userdetails.question_status==6){
          this.api.navCtrl.navigateRoot('question7');
       }else if(this.userdetails.question_status==7){
          this.api.navCtrl.navigateRoot('question8');
       }else if(this.userdetails.question_status==8){
          this.api.navCtrl.navigateRoot('question9');
       }else if(this.userdetails.question_status==9){
          this.api.navCtrl.navigateRoot('question10');
       }else if(this.userdetails.question_status==10){
          this.api.navCtrl.navigateRoot('question11');
       }else if(this.userdetails.question_status==11){
          this.api.navCtrl.navigateRoot('question12');
       }else if(this.userdetails.question_status==12){
          this.api.navCtrl.navigateRoot('question13');
       }else if(this.userdetails.question_status==13){
          this.api.navCtrl.navigateRoot('question14');
       }else if(this.userdetails.question_status==14){
          this.api.navCtrl.navigateRoot('question15');
       }else if(this.userdetails.question_status==15){
          this.api.navCtrl.navigateRoot('question16');
       }else if(this.userdetails.question_status==16){
          this.api.navCtrl.navigateRoot('question17');
       }else if(this.userdetails.question_status==17){
          this.api.navCtrl.navigateRoot('/completeprofile/uploadphoto');
       }else if(this.userdetails.question_status=='upload'){
            this.api.navCtrl.navigateRoot('aim');
       }else if(this.userdetails.question_status=='aim'){
            this.api.navCtrl.navigateRoot('activitylevel');
       }else if(this.userdetails.question_status=='activity'){
            this.api.navCtrl.navigateRoot('/tabs/tab1');
       }else{
        this.api.navCtrl.navigateRoot('/tabs/tab1');
       }
    }else{
        this.api.navCtrl.navigateRoot('/expertprofile');
       }



      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
  }
  onScroll($event)
  {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 100;
    }
  }
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) { }

}
