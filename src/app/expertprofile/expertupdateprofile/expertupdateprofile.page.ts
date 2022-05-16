import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-expertupdateprofile',
  templateUrl: './expertupdateprofile.page.html',
  styleUrls: ['./expertupdateprofile.page.scss'],
})
export class ExpertupdateprofilePage implements OnInit {
profile: any ='posts';
userid:any;
posts:any=[];
userdetails:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
first_name:any;
last_name:any;
is_license_uploaded:Boolean=false;
is_license_uploaded1:Boolean=false;
email:any;
allowedMimes:any=config.IMAGE_EXTENSIONS;
license_file:any;
license_image_url:any;
license_file1:any;
license_image_url1:any;
license_error:boolean=false
constructor(public sanitizer:DomSanitizer,private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) { }


  ngOnInit() {
  }
     ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getdetails();
  }
  uploadLicense(event,type){
   
    this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      image_file.action=type;
      if(self.allowedMimes.indexOf(image_file.type) == -1){
        this.license_error = true;
      }
      else{
     
        if(type=='profile'){
          self.license_file = image_file;
          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;
    
        }else{
         self.license_file1 = image_file;
          self.license_image_url1 = window.URL.createObjectURL(image_file);
          self.is_license_uploaded1 = true;

        }
      }
    }
   }
   submit(){
    const formData = new FormData();
    formData.append('id',this.userid);
    formData.append('first_name',this.first_name);
    formData.append('last_name',this.last_name);
    formData.append('email',this.email);
    if(this.errors.indexOf(this.license_file)==-1){
      formData.append('image',this.license_file);
    }else{
       formData.append('image','');
    }

    if(this.errors.indexOf(this.license_file1)==-1){
        formData.append('cover_image',this.license_file1);
    }else{
       formData.append('cover_image','');
    }
      this.common.presentLoading();
      this.api.post('updateexpert',formData,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
        this.common.presentToast('Updated successfully','success');
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
   }
   getdetails()
  {
  let dict ={
      userid:localStorage.getItem('benfit_userid'),
      };
      this.common.presentLoading();
      this.api.post('getuserdetails',dict,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
       this.userdetails=res.data;
       this.first_name=this.userdetails.first_name; 
       this.last_name=this.userdetails.last_name; 
       this.email=this.userdetails.email; 
       this.posts=res.posts;
      }else
      {
        this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });
  }

}
