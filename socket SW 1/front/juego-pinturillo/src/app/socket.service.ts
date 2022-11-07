import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  io = io("http://localhost:5000/",{
    withCredentials:true,
    autoConnect:true
  })

  constructor() {
    // this.io.emit("test",{text : "hola mundo"});

    // this.io.on("test2",(obj)=>{
    //   alert(`Recibiendo el Objeto que envíe desde el cliente ${obj.text}`)
    // })
   }
}
