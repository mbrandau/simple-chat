import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private socket: io.Socket;

  constructor() {
    this.socket = io();
  }

  

}
