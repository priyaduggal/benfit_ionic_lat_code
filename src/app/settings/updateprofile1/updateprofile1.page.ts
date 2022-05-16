import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-updateprofile1',
  templateUrl: './updateprofile1.page.html',
  styleUrls: ['./updateprofile1.page.scss'],
})
export class Updateprofile1Page implements OnInit {
selectedItem: any = 'item1';
dob:any;
gender:any;
today:any;
age:any;
userid:any;errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
userdetails:any;
 hours_of_sleep:any;
physical_condition:any;intolerances:any;stressed:any;motivated:any;
exercise_often:any;
physical_activity:any;
sports:any=[];
fav_sports:any;
preferences:any;
foods_like:any;
disease:any;
last_name:any;
first_name:any;
email:any;
date_of_birth:any;
current_weight:any;
current_weight_type:any;
goal_weight_type:any;
goal_weight:any;
height_type:any;
height:any;
hours:any=[];
conditions:any=[];
oftens:any=[];
metabolic_rate:any;
constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { 
this.oftens=['0 days','1-2 days','3-4 days','5-7 days'];
this.conditions=['Super Good','Good','Normal','Bad','Very Bad'];
this.hours=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];
 this.sports=['rugby','cricket','roller skating','table tennis','Soccer','Basketball','tennis','baseball','golf','running','volleyball','badminton','swimming','boxing'];
   
  }
  nextStep(){
    this.selectedItem = 'item2';
  }
  nextStep1(){
    this.selectedItem = 'item3';
  }
  nextStep2(){
    this.selectedItem = 'item4';
  }
   ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getuserdetails();
  }
  getuserdetails(){
     let dict ={
      userid:localStorage.getItem('benfit_userid'),
      };
      
      this.api.post('getuserdetails',dict,'').subscribe((result) => {
      var res;
      res = result;
      if(res.status==1){
       this.userdetails=res.data; 
       this.first_name=this.userdetails.first_name;
       this.last_name=this.userdetails.last_name;
       this.email=this.userdetails.email;
       this.date_of_birth=this.userdetails.date_of_birth;
      this.dob = new Date(this.date_of_birth);
      this.today = new Date();
      this.age = Math.floor((this.today-this.dob) / (365.25 * 24 * 60 * 60 * 1000));

      this.gender=this.userdetails.gender;
       this.current_weight=this.userdetails.current_weight;
       this.goal_weight=this.userdetails.goal_weight;
       this.height=this.userdetails.height;
       this.metabolic_rate=this.userdetails.metabolic_rate;
       this.hours_of_sleep=this.userdetails.hours_of_sleep;
       this.physical_condition=this.userdetails.physical_condition;
       this.metabolic_rate=this.userdetails.metabolic_rate;
       this.exercise_often=this.userdetails.exercise_often;
       this.physical_activity=this.userdetails.physical_activity;
       this.fav_sports=this.userdetails.fav_sports;
       this.preferences=this.userdetails.preferences;
       this.disease=this.userdetails.disease;
       this.foods_like=this.userdetails.foods_like;
       this.stressed=this.userdetails.stressed;
       this.motivated=this.userdetails.motivated;
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });

    }
    submit(){

    if(this.gender=='F')
    {
    this.metabolic_rate=655.1 + 
    (9.6 * this.current_weight) + (1.8 * this.height) - (4.7 * this.age);
    this.metabolic_rate=this.metabolic_rate.toFixed(2);
    }else{

    this.metabolic_rate=66.47 + (13.7 * this.current_weight) + 
    (5 * this.height) - (6.8 * this.age);
    this.metabolic_rate=this.metabolic_rate.toFixed(2);

    }
    let dict ={
      userid:localStorage.getItem('benfit_userid'),
      current_weight:this.current_weight,
      goal_weight:this.goal_weight,
      height:this.height,
      metabolic_rate:this.metabolic_rate,
      hours_of_sleep:this.hours_of_sleep,
      physical_condition:this.physical_condition,
      exercise_often:this.exercise_often,
      physical_activity:this.physical_activity,
      fav_sports:this.fav_sports,
      disease:this.disease,
      foods_like:this.foods_like,
      stressed:this.stressed,
      motivated:this.motivated,
      };

       this.common.presentLoading();
            this.api.post('UpdateProfileUser', dict,'').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            this.common.presentToast('Profile updated successfully','success');
            this.api.navCtrl.navigateRoot('/tabs/settings');
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });

    }
  ngOnInit() {
  }

}
