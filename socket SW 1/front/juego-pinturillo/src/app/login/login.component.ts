import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private usuarioService:UserService) { 
      this.loginForm = this.formBuilder.group({
        email: ['',[Validators.required]],
        password: ['',Validators.required],
      })
  }

  ngOnInit(): void {
    //this.usuarioService.getAllUser();
  }
  login(){
    if (this.loginForm.valid) {
        //llamar al servicio para Loguearse
        this.usuarioService.Authentication(this.loginForm.value);

        //console.log("Login con Exito");
    } else {
      //mensaje de que no se pudo registrar por X o Y motivo
      // this.toastr.error('Suscripcion', 'Tarjeta rechazada, Revise sus datos de la tarjeta!');
    }

  }

}
