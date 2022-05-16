import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {
userid:any; hours_of_sleep:any;
physical_condition:any;intolerances:any;stressed:any;motivated:any;
exercise_often:any;
physical_activity:any;
fav_sports:any;
preferences:any;
foods_like:any;
disease:any;
userdetails:any;
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
metabolic_rate:any;
  constructor(private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

   ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getuserdetails();
  }
  save(){

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

}
