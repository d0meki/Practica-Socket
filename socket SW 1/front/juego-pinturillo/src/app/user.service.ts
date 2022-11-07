import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthUser } from './interfaces/usuario';
import { Router } from '@angular/router';
import { ResponseUser } from './interfaces/responseuser';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:4000/user/';
  constructor(private http: HttpClient, private router: Router) { }
  responseUser?: ResponseUser
  getAllUser() {
    this.http.get(this.apiUrl + `users`).subscribe(response => {
      console.log(response);
    });
  }
  Authentication(user: AuthUser) {

    this.http.post(this.apiUrl + `login`, user).subscribe(response => {
      this.responseUser = response;
      if (this.responseUser.ok) {
        this.router.navigate(['dashboard']);
      } else {
        console.log("Incorrecto");
      }
    }, (error: HttpErrorResponse) => {
      // Handle error
      // Use if conditions to check error code, this depends on your api, how it sends error messages
    });
  }
  // registerUsuario(user:RegisterUser){
  //   this.http.post(this.apiUrl+`usuario`,user).subscribe(response =>{
  //     console.log(response);
  //   });
  // }

}
