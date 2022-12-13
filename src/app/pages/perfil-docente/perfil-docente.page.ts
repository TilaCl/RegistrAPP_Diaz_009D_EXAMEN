import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService } from 'src/services/registroservice.service';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  styleUrls: ['./perfil-docente.page.scss'],
})
export class PerfilDocentePage implements OnInit {

  constructor(private alertController: AlertController,
              private registroService: RegistroserviceService,
              private menuController: MenuController) { }

ngOnInit() {
}

mostrarMenu(){
  this.menuController.enable(true, 'second')
  this.menuController.open('second');
}


async CerrarSesion() {
localStorage.removeItem('ingresado1');
localStorage.removeItem('ingresado2');
const alert = await this.alertController.create({
header: 'Aviso',
message: 'Has cerrado sesión correctamente',
buttons: ['OK'],
mode:"ios",
});
await alert.present();
}


Usuario=localStorage.getItem('correo');
Nombre: String;
Email: String;
Sexo: String;
Sede: String;
Promesa=this.registroService.ObtenerDocente(this.Usuario).then((value) =>{
  this.Nombre=value.nomDocente;
  this.Email=value.correoDocente;
  this.Sexo=value.sexoDocente;
  this.Sede=value.sedeDocente;
});
}
