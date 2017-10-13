import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private socket: io.Socket;
  private messageObservable: Observable<any>;
  private joinObservable: Observable<any>;
  private leaveObservable: Observable<any>;
  private disconnectObservable: Observable<any>;

  constructor() {
    this.socket = io();
    this.messageObservable = Observable.create((observer: Observer<any>) => this.socket.on('msg', data => observer.next(data)));
    this.joinObservable = Observable.create((observer: Observer<any>) => this.socket.on('join', data => observer.next(data)));
    this.leaveObservable = Observable.create((observer: Observer<any>) => this.socket.on('leave', data => observer.next(data)));
    this.disconnectObservable = Observable.create((observer: Observer<any>) => this.socket.on('disconnect', data => observer.next(data)));
  }

  public login(username: string): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      this.socket.emit('name', username);
      this.socket.once('login', result => {
        observer.next(result);
        observer.complete();
      });
    });
  }

  public get getMessageObservable(): Observable<any> {
    return this.messageObservable;
  }

  public get getJoinObservable(): Observable<any> {
    return this.joinObservable;
  }

  public get getLeaveObservable(): Observable<any> {
    return this.leaveObservable;
  }

  public get getDisconnectObservable(): Observable<any> {
    return this.disconnectObservable;
  }

}
