import { Injectable,EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
//export class SocketWebService extends Socket{
export class SocketWebService {

  io = io("http://localhost:5000/", {
    withCredentials: true,
    autoConnect: true,
    query: {
       nameRoom: this.cookieService.get('room'),
    }
  })
  outEvent: EventEmitter<any> = new EventEmitter();
  callback: EventEmitter<any> = new EventEmitter();
  constructor(private cookieService: CookieService) {
    // super({
    //   url: 'http://localhost:5000/',
    //     options:{
    //       query: {
    //        // nameRoom: cookieService.get('room'),
    //        nameRoom: "Te estoy enviando algo"
    //       }
    //     }
    // })    
    // this.io.on("test2",(obj)=>{
    //   alert(`Recibiendo el Objeto que envíe desde el cliente ${obj.text}`)
    // })
    this.listen();
  }

  listen = () =>{
    this.io.on('evento', res => this.callback.emit(res))
  }

  emitEvent = (payload = {}) =>{
    this.io.emit('evento',payload)
  }



}
