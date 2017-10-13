import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  submitted: boolean;
  // Data model which will be binded to the form
  user: string;

  constructor(private socketService: SocketService) {
    this.submitted = false;
    this.user = null;
  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    this.socketService.login(this.user).subscribe(
      result => console.log(result),
      error => console.log('Error logging in'),
      () => console.log(this.user)
    );
  }

}
