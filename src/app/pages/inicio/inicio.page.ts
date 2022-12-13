import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService } from 'src/services/registroservice.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private menuController: MenuController,
              private registroService: RegistroserviceService) { }

  

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.enable(true, 'first')
    this.menuController.open('first');
  }

  Usuario=localStorage.getItem('correo');
  Nombre: String;
  Promesa=this.registroService.ObtenerUsuario(this.Usuario).then((value) =>{
    this.Nombre=value.nomUsuario;
  });
  

}
