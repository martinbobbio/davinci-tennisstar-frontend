import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { LoginService } from '../../services/login.service';

import * as $ from 'jquery';
import * as swal from 'sweetalert2';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public registerService:RegisterService,public loginService:LoginService, public router:Router) {
    this.form = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl(''),
      'password2': new FormControl(''),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    })
  }

  form:FormGroup;
  
  ngOnInit() {

  }

  registerForm(){
    let data;
    if(this.form.get("password").value === this.form.get("password2").value){
      data = {
        username: this.form.get("username").value,
        email: this.form.get("email").value,
        password: this.form.get("password").value,
      }
    }else{
      swal({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        type: 'error',
      }).catch(swal.noop);
      return;
    }
    if(this.form.get("password").value == "" || this.form.get("password2").value == ""){
      swal({
        title: 'Error',
        text: 'Debe ingresar contraseña',
        type: 'error',
      }).catch(swal.noop);
      return;
    }
    if(this.form.get("password").value == "" || this.form.get("password2").value == ""){
      swal({
        title: 'Error',
        text: 'Debe ingresar contraseña',
        type: 'error',
      }).catch(swal.noop);
      return;
    }
    if(this.form.get("password").value.length < 8){
      swal({
        title: 'Error',
        text: 'La contraseña debe tener 8 caracteres como mínimo',
        type: 'error',
      }).catch(swal.noop);
      return;
    }
    if(!this.form.get("email").valid){
      swal({
        title: 'Error',
        text: 'No has ingresado un email correcto',
        type: 'error',
      }).catch(swal.noop);
      return;
    }

    this.registerService.sendData(data).subscribe(
      (response)=>{
        if(response.error != null){
          swal({
            title: 'Error',
            text: response.error[0],
            type: 'error',
          }).catch(swal.noop);
          return;
        }

        this.loginService.setSession(this.form.get("username").value,response.data[0].id);

        this.router.navigate(['/']);
        
      } ,
      (error) =>{ 
        ({
          title: 'Error',
          text: 'Error en el registro',
          type: 'error',
        })
        this.form.reset({
          password:"",
          password2:""
        });
      }
    )
}

}
