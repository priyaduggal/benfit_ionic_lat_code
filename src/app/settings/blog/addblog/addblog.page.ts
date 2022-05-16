import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../../config';
import { GlobalFooService } from '../../../services/globalFooService.service';
import {CommonService} from '../../../services/common.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.page.html',
  styleUrls: ['./addblog.page.scss'],
})
export class AddblogPage implements OnInit {
title:any;
public Editor = ClassicEditor;
description='';
is_submit_login:boolean=false;
image:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
license_file:any;
license_image_url:any;
license_error:boolean=false;
is_license_uploaded:Boolean=false;
allowedMimes:any=config.IMAGE_EXTENSIONS;
  constructor(public sanitizer:DomSanitizer,
    private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) { 
  }

  ngOnInit() {
  }

  uploadimage(event){
   this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      if(self.allowedMimes.indexOf(image_file.type) == -1){
        this.license_error = true;
        this.common.presentToast('This file type is not allowed','danger');
      }
      else{
          self.license_file = image_file;
          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;
        }
      }
  }
  addblog(){
      this.is_submit_login = true;
       if(this.errors.indexOf(this.title) >= 0 ||
       this.errors.indexOf(this.description) >= 0 ||
       this.errors.indexOf(this.license_file) >= 0){
      return false;
    }else
    {

      const frmData = new FormData();
      frmData.append("file", this.license_file);
      frmData.append("title", this.title);
      frmData.append("description", this.description); 
      frmData.append("userid",localStorage.getItem('benfit_userid'));

      this.common.presentLoading();
      this.api.post('addblog', frmData,'').subscribe((result) => {
      this.common.stopLoading();
      var res;
      res = result;
      if(res.status==1){
      this.title='';
      this.description='';
       this.common.presentToast('Blog added successfully','success');
      this.api.navCtrl.navigateRoot('settings/blog');
      }else{
      this.common.presentToast(res.message,'danger');
      }
      },
      err => {
      });

    }
  }

}
