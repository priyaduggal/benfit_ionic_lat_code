import { Component,ViewChild, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router,ActivatedRoute } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/globalFooService.service';
import {CommonService} from '../services/common.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { VideoEditor,CreateThumbnailOptions } from '@ionic-native/video-editor/ngx';
@Component({
  selector: 'app-expertprofile',
  templateUrl: './expertprofile.page.html',
  styleUrls: ['./expertprofile.page.scss'],
})
export class ExpertprofilePage implements OnInit {
profile: any ='posts';
license_file:any;
allowedMimes:any=config.IMAGE_EXTENSIONS;
userid:any;
blob:any;
is_license_uploaded:Boolean=false;
posts:any=[];
thumbnail:any;
license_image_url:any;
userdetails:any;
license_error:boolean=false
thumb:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
constructor(private photoViewer: PhotoViewer,
private globalFooService: GlobalFooService,
public api:ApiService,
public activatedRoute: ActivatedRoute,
public router:Router,
private common: CommonService,
public videoEditor:VideoEditor) { }


  ngOnInit() {
  }
   clickImage(image1){
    var image=this.IMAGES_URL+'/'+image1;
    console.log("image clicked",image);
    this.photoViewer.show(image);
  }
  
  
   transform() {
   this.videoEditor.createThumbnail({fileUri:'http://dev.indiit.solutions/benfitbackend/public/uploads/4065388.mp4', outputFileName:'test.png', atTime:2, width:320, height:240,quality:100} )
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

  openFullscreen(url)
  {

        
      
  }
  checkurl(uri1)
  {
    var uri=this.IMAGES_URL+'/'+uri1;
    //moving on now
    var parts = uri.split(".");
    var extension = parts[parts.length-1];
    var imageTypes = ['jpg','jpeg','tiff','png','gif','bmp']
    if(imageTypes.indexOf(extension) !== -1) {
        return true;   
    }else{
      return false;
    }
  }


 uploadLicense(event,type){
  
  /*   this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      //console.log(image_file);
      image_file.action=type;
      if(self.allowedMimes.indexOf(image_file.type) == -1){
        this.license_error = true;
       this.common.presentToast('This filetype is not supported','danger');
      }
      else{
        console.log('type is');
        console.log(type);
        if(type=='post'){
          self.license_file = image_file;
          self.blob = new Blob([image_file],{type:image_file.type});

          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;



           localStorage.setItem('post_img',self.license_file);
           localStorage.setItem('new_blob',self.blob);
           //var type=image_file.type.split("/");
           localStorage.setItem('extension',image_file.name);


            localStorage.setItem('license_image_url',self.license_image_url);
            this.api.navCtrl.navigateRoot('gallery/newpost');
        }
      }
    } */
  }


    ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getdetails();
  
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
