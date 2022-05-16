import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterratingPage } from 'src/app/filterrating/filterrating.page';
import { AppointmentmodalPage } from './appointmentmodal/appointmentmodal.page';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-expertdetails',
  templateUrl: './expertdetails.page.html',
  styleUrls: ['./expertdetails.page.scss'],
})
export class ExpertdetailsPage implements OnInit {
exid:any;
errors:any=[0,'',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
details:any;
rate:any;
posts:any=[];
  constructor(private common: CommonService,
    public activatedRoute: ActivatedRoute,
    public api:ApiService,
    public modalController: ModalController) { 
  this.exid = activatedRoute.snapshot.paramMap.get('id');
}

ionViewDidEnter(){
   this.getexdetails();
}
getexdetails(){
   let dict ={
      id: this.exid,
      };
      this.common.presentLoading();
        this.api.post('getexpertdetails',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.details=res.data; 
          this.posts=res.post;
          this.rate=res.rating;
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
  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterratingPage,
      cssClass: 'ExercisesFilterPage',
      componentProps: {
      expid: this.exid,
      }
    });
    return await modal.present();
  }

  async presentModal1() {
    const modal = await this.modalController.create({
      component: AppointmentmodalPage,
      cssClass: 'appointMent'
    });
    return await modal.present();
  }

}
