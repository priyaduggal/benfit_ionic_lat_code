import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
@Component({
  selector: 'app-workoutvideos',
  templateUrl: './workoutvideos.page.html',
  styleUrls: ['./workoutvideos.page.scss'],
})
export class WorkoutvideosPage implements OnInit {
userid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
catid:any;
exercises:any=[];
constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) {
this.catid = activatedRoute.snapshot.paramMap.get('id');

 }

ionViewDidEnter()
{

  this.getexercise();
}
getexercise()
{
let dict ={
    catid: this.catid,
    userid:localStorage.getItem('benfit_userid'),
    };
 this.common.presentLoading();
      this.api.post('getall_exercises',dict,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
        if(res.status==1){
          this.exercises=res.data;     
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
