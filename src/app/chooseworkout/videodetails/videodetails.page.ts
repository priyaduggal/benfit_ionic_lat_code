import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-videodetails',
  templateUrl: './videodetails.page.html',
  styleUrls: ['./videodetails.page.scss'],
})
export class VideodetailsPage implements OnInit {
userid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
exid:any;
details:any;
@ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
isPlay: boolean = false;
  constructor(private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) {
this.exid = activatedRoute.snapshot.paramMap.get('id');
 }
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }

    ngOnInit() {
    }
    ionViewDidEnter()
    {
      this.userid=localStorage.getItem('benfit_userid'),
      this.getexercisedetails();
//       var running = false;
//       $('#counter').show();
// var self=this;
//         $('#counter').html('3');
//         $('#counter').show();
//         setTimeout(function() {
//             $('#counter').html('2');
//         },1000);
//         setTimeout(function() {
//             $('#counter').html('1');
//         },2000);
//         setTimeout(function() {
//             self.playPause();
//             $('#counter').hide();
//             $('#video').hide();

//         },3000);
    }

    
    getexercisedetails()
    {
      let dict ={
      exid: this.exid,
      };
      this.common.presentLoading();
        this.api.post('getexercise_details',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.details=res.data;     
          var vid = document.getElementById("my_video_1");
          var self=this;
          vid.onended = function() {    
            let dict1 ={
              id: self.userid,
              videoid:self.details.id
              };
              self.api.post('user_watched_video',dict1,'').subscribe((result) => {

              },
              err => {
              });
          };
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });

    }
}
