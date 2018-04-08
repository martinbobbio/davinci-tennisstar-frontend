//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { MapService } from './services/map.service';
import { HomeService } from './services/home.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

//Dependencia (Mapa)
import { AgmCoreModule } from '@agm/core';
//Dependencia (Charts)
import { ChartsModule } from 'ng2-charts';
//Dependencia (File upload)
import { FileUploadModule } from 'ng2-file-upload';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

//Pipes
import { SafePipe } from './pipes/safe.pipe';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MapComponent } from './components/map/map.component';
import { DodecaedroComponent } from './components/dodecaedro/dodecaedro.component';
import { ExplorarComponent } from './views/explorar-map/explorar.component';
import { NoticesComponent } from './components/notices/notices.component';
import { NoticeComponent } from './components/notice/notice.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CompletePerfilComponent } from './views/complete-perfil/complete-perfil.component';
import { CompleteGameStatsComponent } from "./views/complete-game-stats/complete-game-stats.component";
import { HomeExplorarComponent } from './components/home-explorar/home-explorar.component';
import { ProfileComponent } from './views/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MapComponent,
    DodecaedroComponent,
    ExplorarComponent,
    NoticesComponent,
    NoticeComponent,
    LoginComponent,
    RegisterComponent,
    CompletePerfilComponent,
    CompleteGameStatsComponent,
    HomeExplorarComponent,
    ProfileComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQZGWfnDR3C28jqGEiJqEQT4BvTXRy_bM'
    }),
    HttpModule,
    APP_ROUTING,
    ReactiveFormsModule,
    ChartsModule,
    FileUploadModule
  ],
  providers: [
    MapService,
    HomeService,
    LoginService,
    RegisterService,
    AuthService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
@NgModule({
  declarations: [FileDropDirective, FileSelectDirective]
})
export class AppModule { }
