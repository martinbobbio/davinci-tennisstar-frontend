//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Servicios
import { MapService } from './services/map.service';

//Dependencia (Mapa)
import { AgmCoreModule } from '@agm/core';
//Dependencia (Angular 2 - Materialize)
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterializeModule } from "angular2-materialize";
//import { MatSidenavModule } from '@angular/material/sidenav';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQZGWfnDR3C28jqGEiJqEQT4BvTXRy_bM'
    }),
    HttpModule,
    MaterializeModule,
    //MatSidenavModule
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
