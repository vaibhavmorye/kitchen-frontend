import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class LiveFeedsService {

  getUpdate: Subject<any>;

  // Our constructor calls our socket service connect method
  constructor(private sService: SocketService) {
    this.getUpdate = <Subject<any>>sService.connect()
      .map((response: any): any => {
        return response;
      })
  }

  // Our simplified interface for sending
  // data back to our socket.io server
  sendUpdate(updateValue) {
    console.log(updateValue.completed_qty);
    this.getUpdate.next(updateValue);
  }
}
