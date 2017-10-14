import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SocketService } from './socket.service';
import { ChatComponent } from './chat/chat/chat.component';
import { MessageItemComponent } from './chat/chat/message-item/message-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ChatComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
