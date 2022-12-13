import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-password3',
  templateUrl: './restablecer-password3.page.html',
  styleUrls: ['./restablecer-password3.page.scss'],
})
export class RestablecerPassword3Page implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async RestablecerContra() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Cambio realizado correctamente',
      buttons: ['OK'],
      mode:"ios",
    });

    await alert.present();
  }

  password = {
    password:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.password);
  }
}
