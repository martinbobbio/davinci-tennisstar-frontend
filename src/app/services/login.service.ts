import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptionsArgs, RequestMethod, RequestOptions, Response, URLSearchParams  } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http:Http) {}

  sendData(formData){
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', formData.username);
    urlSearchParams.append('password', formData.password);

    let body = urlSearchParams.toString();

    return this.http.post(`http://admin-tenis.tennis-star.com/web/app_dev.php/api/auth/login`,body, {headers: headers}).map(
      (response) => response.json()
    )
  }

}
