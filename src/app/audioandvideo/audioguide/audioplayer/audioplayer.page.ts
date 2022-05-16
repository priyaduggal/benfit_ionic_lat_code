import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../../config';
import { GlobalFooService } from '../../../services/globalFooService.service';
import {CommonService} from '../../../services/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.page.html',
  styleUrls: ['./audioplayer.page.scss'],
})
export class AudioplayerPage implements OnInit {
  selectedAudio;
  currentAudioIndex = 0;
  repeatActive = false;
  isError = false;
  isShuffle = false;
  volumeBeforeMute;
userid:any;
pid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
details:any;

constructor(private globalFooService: GlobalFooService,
private common: CommonService,
public api:ApiService,
public activatedRoute: ActivatedRoute) {
this.pid = activatedRoute.snapshot.paramMap.get('id');
this.globalFooService.getObservable().subscribe((data) => {

  
    });


}

audioList = [
            {
            url:localStorage.getItem('url'),
            title: localStorage.getItem('title'),
            cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
            }
            ];
  
     
ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
  }
    
 
  getguidedetails(){
   
  }
  ngOnInit() {
  }




 

}
