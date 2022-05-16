import { Component, OnInit ,ViewChild} from '@angular/core';
import {ApiService } from '../../services/api/api.service';
import {Router ,ActivatedRoute} from '@angular/router';
import { config } from '../../config';
import { GlobalFooService } from '../../services/globalFooService.service';
import {CommonService} from '../../services/common.service';
import * as $ from 'jquery';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { EmojiSearch } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { IonContent } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
const CUSTOM_EMOJIS = [
  {
    name: 'Party Parrot',
    shortNames: ['parrot'],
    keywords: ['party'],
    imageUrl: './assets/images/parrot.gif',
  },
  {
    name: 'Octocat',
    shortNames: ['octocat'],
    keywords: ['github'],
    imageUrl: 'https://github.githubassets.com/images/icons/emoji/octocat.png',
  },
  {
    name: 'Squirrel',
    shortNames: ['shipit', 'squirrel'],
    keywords: ['github'],
    imageUrl: 'https://github.githubassets.com/images/icons/emoji/shipit.png',
  },
];
@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss','../../../../node_modules/@ctrl/ngx-emoji-mart/picker.css'],
})

export class MessagePage implements OnInit {
@ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent; 
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL; 
userid:any;
todata:any;
emoji:any;
message:any;
chatid:any;
chats:any=[];
details:any;
license_file:any;
license_image_url:any;
license_error:boolean=false;
showCity = false;
showToolbar = false;

is_license_uploaded:Boolean=false;
allowedMimes:any=config.IMAGE_EXTENSIONS;
  constructor(private common: CommonService,
public api:ApiService,private globalFooService: GlobalFooService,public sanitizer:DomSanitizer,
public activatedRoute: ActivatedRoute) { 
this.chatid = activatedRoute.snapshot.paramMap.get('id');
}
 moreInfo() {
    this.showCity = true;
  } 

   onScroll($event)
  {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 100;
    }
  }
  
  back(){

    this.globalFooService.publishSomeData({
      set: {'data': 1}
    });
    this.api.navCtrl.navigateRoot(['/tabs/chat']);
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
        console.log('type is');
        console.log(type);
        if(type=='profile'){
          self.license_file = image_file;
          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;
    // const frmData = new FormData();  
    // if(this.license_file=='')
    // {
    // frmData.append("file", "");
    // }else{
    // frmData.append("file", this.license_file);  
    // }
    
    //   const id = localStorage.getItem('id');
    //   frmData.append("id", id); 
      
    //  this.userService.presentLoading();
    // this.userService.postData(frmData, 'uploadImage').subscribe((result) =>{
    // this.userService.stopLoading();

    // if(result.status === 1){
    // this.userService.presentToast('Image updated successfully','success');
    // this.changeStatus();
    // //this.userdata = result.data;
    // //console.log('updated data:',result.data);
    // }
    // else if(result.status === 401){
    // this.userService.presentToast(result.msg,'danger');
    // }
    // else{
    // this.userService.presentToast('Error while signing up! Please try later','danger');
    // }
    // }); 
      
      
      
        }
      }
    }
   }
  ScrollToBottom(){
    setTimeout(() => {
      this.myContent.scrollToBottom(12);
   }, 122);

  }
  handleClick($event: EmojiEvent) {
    console.log($event.emoji);
    if(this.errors.indexOf(this.message)>=0){
            this.message= $event.emoji.native;
    }else{
           this.message=this.message+''+ $event.emoji.native;
          }
    this.showCity = false;
  }
    setDarkmode(mode: boolean | undefined) {
    if (mode === undefined) {
      this.darkestMode = mode;
      this.darkMode = !!(
        typeof matchMedia === 'function' &&
        matchMedia('(prefers-color-scheme: dark)').matches
      );
    } else {
      this.darkMode = mode;
      this.darkestMode = mode;
    }
  }
themes = [
    'native',
    'apple',
    'google',
    'twitter',
    'facebook',
  ];
  darkMode: undefined | boolean = !!(
    typeof matchMedia === 'function' &&
    matchMedia('(prefers-color-scheme: dark)').matches
  );
  darkestMode: undefined | boolean = undefined;
  set = 'native';
  native = true;
  CUSTOM_EMOJIS = CUSTOM_EMOJIS;

  setTheme(set: string) {
    this.native = set === 'native';
    this.set = set;
  }
  addEmoji($event)
  {


  }
  destroy(){

    this.is_license_uploaded=false;
    this.license_file='';
  }
 ionViewDidEnter()
  {
   this.userid=localStorage.getItem('benfit_userid');
   this.getchat();
  }
send(){

if(this.errors.indexOf(this.message)>=0 && this.errors.indexOf(this.license_file)>=0){

return false;
}
 const frmData = new FormData();  
    if(this.errors.indexOf(this.license_file)>=0)
    {
    frmData.append("file", "");
    }else{
    frmData.append("file", this.license_file);  
    }
  
      if(this.errors.indexOf(this.message)>=0)
    {
    frmData.append("message", "");
    }else{
    frmData.append("message", this.message);  
    }
    
    frmData.append("chatid", this.todata.chatid); 
    frmData.append("message", this.message); 
    frmData.append("to_id", this.todata.to_id); 
    frmData.append("from_id", this.userid); 
        this.common.presentLoading();
        this.api.post('send_message',frmData,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
         // this.chats.push({message : this.message,size : '',rooms : '',baths : '',price : '',image : '',url : ''});
          this.message='';
          this.license_file='';
          this.is_license_uploaded=false;
          this.getchat();
          }else
          {
          this.common.presentToast(res.message,'danger');

           }
        },
      err => {
      });
}

  getchat(){
     let dict ={
      id: this.chatid,
      userid:this.userid,
      };
        this.common.presentLoading();
        this.api.post('get_chat',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
          this.chats=res.data; 
          this.todata=res.inbox;
           this.ScrollToBottom();
         
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

  hideMe1 : boolean = false;
  hideMe2 : boolean = false;

  hide1(id){
    $('.dropdowndelete'+id).toggleClass('show');
   
  }
  delete(id,index){
    let dict ={
      id: id,
      };
        this.common.presentLoading();
        this.api.post('deletemessage',dict,'').subscribe((result) => {
        this.common.stopLoading();
          var res;
          res = result;
          if(res.status==1){
            this.chats.splice(index,1);
          this.common.presentToast('Deleted Successfully','success');
          }else
          {
          this.common.presentToast(res.message,'danger');
          }
        },
      err => {
      });
  }
  hide2(){
    this.hideMe2 = !this.hideMe2
  }

}
