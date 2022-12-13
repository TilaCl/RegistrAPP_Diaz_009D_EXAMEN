import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService } from 'src/services/registroservice.service';

@Component({
  selector: 'app-inicio-docente',
  templateUrl: './inicio-docente.page.html',
  styleUrls: ['./inicio-docente.page.scss'],
})
export class InicioDocentePage implements OnInit {

  constructor(private menuController: MenuController,
              private registroService: RegistroserviceService) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.enable(true, 'second')
    this.menuController.open('second');
  }

  Usuario=localStorage.getItem('correo');
  Nombre: String;
  Promesa=this.registroService.ObtenerDocente(this.Usuario).then((value) =>{
    this.Nombre=value.nomDocente;
  });
  
}
