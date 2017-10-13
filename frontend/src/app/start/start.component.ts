import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  submitted: boolean;
  // Data model which will be binded to the form
  user: User;

  constructor() {
    this.submitted = false;
    this.user = new User();
  }

  ngOnInit() {

  }

  onSubmit() {
    // TODO: Form submit
    this.submitted = true;
    console.log(this.user);
  }

}
