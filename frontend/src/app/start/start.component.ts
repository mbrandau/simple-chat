import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  submitted: boolean;
  // Data model which will be binded to the form
  user: string;

  constructor() {
    this.submitted = false;
    this.user = null;
  }

  ngOnInit() {

  }

  onSubmit() {
    // TODO: Form submit
    this.submitted = true;
    console.log(this.user);
  }

}
