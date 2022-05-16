import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
@Component({
  selector: 'app-filterrating',
  templateUrl: './filterrating.page.html',
  styleUrls: ['./filterrating.page.scss'],
})
export class FilterratingPage implements OnInit {
ratingDisplay: number;
id:any;
errors:any=['',null,undefined];
is_submit_signup:boolean=false;
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public router:Router,
private common: CommonService,
public navParams: NavParams,
public modalCtrl: ModalController
  ) {
   this.id=navParams.get('expid'); 
  
    }

    save(){

       this.is_submit_signup = true;
        if(this.errors.indexOf(this.ratingDisplay) >= 0){
            return false;
        }else{
            let dict ={
            fromid: localStorage.getItem('benfit_userid'),
            toid: this.id,
            rating: this.ratingDisplay,
            };
            this.common.presentLoading();
            this.api.post('AddRating', dict,'').subscribe((result) => {
            this.is_submit_signup = false;
            this.common.stopLoading();
            var res;
            res = result;
            if(res.status==1){
            this.ratingDisplay=0;
            this.dismiss();
            this.common.presentToast('Rated SUCCESSFULLY !.','success');
            }else
            {
            this.common.presentToast(res.message,'danger');
            }
            },
            err => {
            });
        }

    }

  ngOnInit() {
  }
 onRatingSet(rating: number): void {
    this.ratingDisplay = rating;
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
