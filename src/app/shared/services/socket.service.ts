import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;
  //ws_url = 'http://localhost:5000';
  ws_url ="https://kitchen-app-api.herokuapp.com";
  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(this.ws_url);

    let observable = new Observable(observer => {
      this.socket.on('update_value', (data) => {
        console.log("Received message from Websocket Server");
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('order-complete', JSON.stringify(data));
      },
    };

    return Rx.Subject.create(observer, observable);
  }

}
