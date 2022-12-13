import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer-password',
  templateUrl: './restablecer-password.page.html',
  styleUrls: ['./restablecer-password.page.scss'],
})
export class RestablecerPasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  password = {
    email:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.password);
  }
}
