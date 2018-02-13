import { Component, OnInit, Input } from '@angular/core';

import { MapService } from '../../services/map.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() type:number = 1;

  //Imagenes para el home
  homeImages=["federer","djokovic","murray","nadal","del potro"];
  homeImageIndex;

  //Estados
  isLogged:boolean = false;
  
  //Latitud y Longitud (Escuela Da Vinci)
  lat: number = -34.604486;
  lng: number = -58.396329;
  zoom: number = 12;

  places:any[];

  constructor(public mapService:MapService) { }

  ngOnInit() {

    if(this.type != 1){

      this.mapService.getClubes(this.lat, this.lng).subscribe(
        (data) => {
          this.places = data.data[0].results;
        })
    }

    this.homeImageIndex = Math.floor(Math.random() * 5);

  }

  checkLogin(){
    if(!this.isLogged){}

  }

}
