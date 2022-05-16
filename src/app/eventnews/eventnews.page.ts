import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import { DeleteblogPage } from '../deleteblog/deleteblog.page';
import { ToastController, LoadingController,ActionSheetController, 
  Platform, ModalController, 
  NavParams,NavController, AlertController} from '@ionic/angular';
@Component({
  selector: 'app-eventnews',
  templateUrl: './eventnews.page.html',
  styleUrls: ['./eventnews.page.scss'],
})
export class EventnewsPage implements OnInit {
events:any=[];
userid:any;
IMAGES_URL:any = config.IMAGES_URL; 
errors:any=[0,'',null,undefined];
constructor(private globalFooService: GlobalFooService,
public api:ApiService,public modalController: ModalController,
public router:Router,
private common: CommonService) { }

  ngOnInit() {
  }
 async delete(bid)
  {
      const modal = await this.modalController.create({
      component: DeleteblogPage,
      cssClass: 'addpoint',
      componentProps: {
      blogid: bid,
      title:'event',

      }
      });
      modal.onDidDismiss().then((detail) => {
          this.ionViewDidEnter();
      });
      return await modal.present();
  }
   ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getevents();
  }

  getevents(){
     let dict ={
      id: this.userid,
      };
      this.common.presentLoading();
        this.api.post('geteventlist',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.events=res.data; 
          }else
          {
          this.common.presentToast(res.message,'danger');
          }
        },
      err => {
      });
  }

}
