import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-chooseexpert',
  templateUrl: './chooseexpert.page.html',
  styleUrls: ['./chooseexpert.page.scss'],
})
export class ChooseexpertPage implements OnInit {
experts:any=[];errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL;
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService) { }

  ionViewDidEnter(){
    this.getexperts();
  }

  getexperts(){
            this.common.presentLoading();
            this.api.post('get_experts', '','').subscribe((result) => {
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
               this.experts=res.data;
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
