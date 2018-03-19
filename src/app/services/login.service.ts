import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, RequestMethod, RequestOptions, Response, URLSearchParams  } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  backUrl = environment.backUrl;

  constructor(private http:Http) {}

  sendData(formData){
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', formData.username);
    urlSearchParams.append('password', formData.password);

    let body = urlSearchParams.toString();

    return this.http.post(`${this.backUrl}/api/auth/login`,body, {headers: headers}).map(
      (response) => response.json()
    )
  }

  setSession(username,id){
    localStorage.setItem('id_user', id);
    localStorage.setItem('username', username);
    localStorage.setItem('new_user', "true");
  }

}
