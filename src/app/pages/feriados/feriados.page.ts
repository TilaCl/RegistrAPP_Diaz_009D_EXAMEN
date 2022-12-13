import { Component, OnInit } from '@angular/core';
import { ServiceFeriadosService } from '../../../services/service-feriados.service';
import { Feriados } from '../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})

export class FeriadosPage implements OnInit {
  
  feriados:any;

  constructor(private feriadoService : ServiceFeriadosService,
              private menuController : MenuController) { }

  
  ngOnInit() {
    this.feriadoService.getFeriados().subscribe(resp => {
      this.feriados=resp.data;
    })
    
  }




  mostrarMenu(){
    this.menuController.enable(true, 'first')
    this.menuController.open('first');
  }
  
}
