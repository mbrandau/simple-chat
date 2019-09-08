import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }
  messages: Message[];
  ngOnInit() {
  }

}
