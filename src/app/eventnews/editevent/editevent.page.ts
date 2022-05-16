import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.page.html',
  styleUrls: ['./editevent.page.scss'],
})
export class EditeventPage implements OnInit {
evid:any;
title:any;
description='';
ev_date:any;
ev_time:any;
location:any;
is_submit_login:boolean=false;
image:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
license_file:any;
license_image_url:any;
license_error:boolean=false;
is_license_uploaded:Boolean=false;
details:any;
userid:any;
allowedMimes:any=config.IMAGE_EXTENSIONS;
  constructor(public sanitizer:DomSanitizer,
    private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService) { 
this.evid = activatedRoute.snapshot.paramMap.get('id');
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
  ionViewDidEnter(){
	this.userid=localStorage.getItem('benfit_userid');
   this.geteventdetails();  
  } 
  geteventdetails(){
		let dict ={
		id: this.evid,
		};
		this.common.presentLoading();
		this.api.post('get_event_details',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.details=res.data; 
          this.title=this.details.title;
		  this.description=this.details.description;
		  this.location=this.details.location;
		  this.ev_date=this.details.event_date;
		  this.ev_time=this.details.time;
		  this.image=this.details.image;
		  
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });
  }
  public handleAddressChange(address) {
        this.location=address.formatted_address;
    
    }
  options:any = {
    types:[],
    //componentRestrictions:{'country':'AE'}
  }
  editevent(){
	this.is_submit_login = true;
	if(this.errors.indexOf(this.title) >= 0 ||
	this.errors.indexOf(this.description) >= 0 ||
	this.errors.indexOf(this.location) >= 0 ||
	this.errors.indexOf(this.ev_date) >= 0 ||
	this.errors.indexOf(this.ev_time) >= 0){
	return false;
	}else
	{
	const frmData = new FormData();
	if(this.errors.indexOf( this.license_file)==-1)
		{
		frmData.append("file", this.license_file);
		}else
		{
		frmData.append("file", '');
		}
		frmData.append("title", this.title);
		frmData.append("description", this.description); 
		frmData.append("location", this.location); 
		frmData.append("ev_date", this.ev_date); 
		frmData.append("ev_time", this.ev_time); 
		frmData.append("id",this.evid);
		this.common.presentLoading();
		this.api.post('updateevent', frmData,'').subscribe((result) => {
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.title='';
		this.description='';
		this.common.presentToast('Event updated successfully','success');
		this.api.navCtrl.navigateRoot('/eventnews');
		}else{
		this.common.presentToast(res.message,'danger');
		}
		},
		err => {
		});
	  
	}		
  }
  ngOnInit() {
  }

}
