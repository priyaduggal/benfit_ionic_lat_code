import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {
workouts:any=[];
IMAGES_URL:any = config.IMAGES_URL;
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.getcategories();
  }

  getcategories(){
  this.common.presentLoading();
      this.api.post('getequipments', '','').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
        if(res.status==1){
          this.workouts=res.data;     
        }else
        {
          this.common.presentToast(res.message,'danger');
        }
        },
        err => {
        });
  }


}
