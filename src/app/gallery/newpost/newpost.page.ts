import { Component, OnInit } from '@angular/core';
import { config } from '../../config';
import { DomSanitizer } from '@angular/platform-browser';
import {CommonService} from '../../services/common.service';
import {ApiService } from '../../services/api/api.service';
import * as $ from 'jquery';
import { VideoEditor,CreateThumbnailOptions } from '@ionic-native/video-editor/ngx';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {
img:any;
profile: any ='posts';
license_file:any;
allowedMimes:any=config.IMAGE_EXTENSIONS;
userid:any;
blob:any;
is_license_uploaded:Boolean=false;
posts:any=[];
license_image_url:any;
license_video_url:any;
userdetails:any;
license_error:boolean=false
errors:any=['',null,undefined];
newblob:any;
url:any;
thumb:any;
extension:any;
caption:any;
IMAGES_URL:any = config.IMAGES_URL; 
constructor(public videoEditor:VideoEditor,public api:ApiService,private common: CommonService,public sanitizer:DomSanitizer) { }
ngOnInit() {
  }
  ionViewDidEnter(){

	$('#lae-imgs2').change();
	$('#lae-imgs2').click();
    this.img=localStorage.getItem('post_img');
    this.url=localStorage.getItem('license_image_url');
    this.newblob=localStorage.getItem('new_blob');
    this.extension=localStorage.getItem('extension');
   
  }
  
   transform(value) {
   this.videoEditor.createThumbnail({fileUri:value.url, outputFileName:value.name, atTime:2, width:320, height:240,quality:100} )
    .then(ref=>{
      console.log(ref)
	//  alert(ref);
       this.thumb = ref;  
   //  console.log('generated thumb  '+ this.thumb )
    })
    .catch(err=>{
	//	alert(err);
      console.log('sssssssssssssss',err)
    })
    console.log('returning thumb  '+ this.thumb)
    return this.thumb
  }
 uploadLicense(event,type){
 console.log(event);
 this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
	  this.transform(image_file);
      //console.log(image_file);
      image_file.action=type;
     
        console.log('type is');
        console.log(type);
        if(type=='post'){
          self.license_file = image_file;
		  console.log('000000000000000000=====', self.license_file);
		 // alert(image_file.type);
		  if(image_file.type=='video/mp4')
		  {
			  self.license_video_url = window.URL.createObjectURL(image_file);
		  }else{
			  self.license_image_url = window.URL.createObjectURL(image_file);
		  }
          self.blob = new Blob([image_file],{type:image_file.type});

          self.is_license_uploaded = true;
    
        }
      
    } else{
		 this.api.navCtrl.navigateRoot('expertprofile');
	}
  }

  upload(){
	//  alert(this.newblob);
   // var file=new File([this.newblob], this.extension);
	var file = new File([JSON.stringify(this.url)], this.extension, {
	type: "image/png",
	});

    const formData = new FormData();
    formData.append('id',localStorage.getItem('benfit_userid'));
    formData.append('caption',this.caption);
    formData.append('image',this.license_file);
     
    this.common.presentLoading();
      this.api.post('addpost',formData,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
        this.common.presentToast('Saved successfully','success');
        this.api.navCtrl.navigateRoot('expertprofile');
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });

  }

}
  