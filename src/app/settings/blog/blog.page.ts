import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import { DeleteblogPage } from '../../deleteblog/deleteblog.page';
import { ToastController, LoadingController,ActionSheetController, 
  Platform, ModalController, 
  NavParams,NavController, AlertController} from '@ionic/angular';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL;
userid:any;
blogs:any=[];
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public modalController: ModalController,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) { }

  ngOnInit() {
  }

  async delete(bid)
  {
      const modal = await this.modalController.create({
      component: DeleteblogPage,
      cssClass: 'addpoint deletemodal',
      componentProps: {
      blogid: bid,
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
     this.common.presentLoading();
      this.api.post('getallblogs', '','').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
        this.blogs=res.data;
      }else{
         this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });

  }

}
