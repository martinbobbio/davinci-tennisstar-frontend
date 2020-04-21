import { Component, OnInit,Input } from '@angular/core';
import { environment } from '../../../environments/environment';

declare let $: any;

@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  @Input() type:number = 1;
  @Input() title:string;
  @Input() description:string;
  @Input() createdAt:string;
  @Input() imgsrc:string;
  @Input() videoLink:string;
  @Input() id:number;

  is_mobile = false;
  linkVideoYT:string;
  imgDisplay:number = 1;
  urlback = environment.backUrl;

  showImage(id){
    $("#video-"+id).fadeOut(0);
    $("#image-"+id).fadeIn(0);
    $("#btn-video-"+id).fadeIn(0);
    $("#btn-image-"+id).fadeOut(0);
  }
  showVideo(id){
    $("#video-"+id).fadeIn(0);
    $("#image-"+id).fadeOut(0);
    $("#btn-image-"+id).fadeIn(0);
    $("#btn-video-"+id).fadeOut(0);
  }
  removeImage(id){
    $("#image-"+id).fadeOut(0);
    $("#btn-image-"+id).fadeOut(0);
  }
  

  constructor() { }

  ngOnInit() {

    this.linkVideoYT = `https://www.youtube.com/embed/${this.videoLink}`;
    
    this.removeImage(this.id);
    
    if(screen.width <= 576){
      this.is_mobile = true;
    }
  }

}
