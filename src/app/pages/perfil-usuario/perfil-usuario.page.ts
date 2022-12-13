import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService } from 'src/services/registroservice.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(private alertController: AlertController,
              private registroService: RegistroserviceService,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.enable(true, 'first')
    this.menuController.open('first');
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
  Promesa=this.registroService.ObtenerUsuario(this.Usuario).then((value) =>{
    this.Nombre=value.nomUsuario;
    this.Email=value.correoUsuario;
    this.Sexo=value.sexoUsuario;
    this.Sede=value.sedeUsuario;
  });
}
