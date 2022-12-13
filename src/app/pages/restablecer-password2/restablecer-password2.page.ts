import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer-password2',
  templateUrl: './restablecer-password2.page.html',
  styleUrls: ['./restablecer-password2.page.scss'],
})
export class RestablecerPassword2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  codigo = {
    code:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.codigo);
  }
}
