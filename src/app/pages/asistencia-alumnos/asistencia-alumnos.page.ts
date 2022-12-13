import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { RegistroserviceService } from 'src/services/registroservice.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-asistencia-alumnos',
  templateUrl: './asistencia-alumnos.page.html',
  styleUrls: ['./asistencia-alumnos.page.scss'],
})
export class AsistenciaAlumnosPage implements OnInit {

  asisten : any;
  asistencia : any;

  constructor(private menuController : MenuController,
    private registroAs : RegistroserviceService,
    private loadCtrl : LoadingController) { }

  ngOnInit() {
    this.registroAs.getAsistencia().then(datos =>{
      console.log(datos)
      this.asistencia=datos;
    })
  }

  //============================================================================================
  //Metodo para cargar una lista Json (Comentado debido a que no se utilizará por problemas en el apk movil)
  async loadAsistencia(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message : "Cargando..", 
      spinner: "bubbles"
    });
    await loading.present();

    

    this.registroAs.listarAsistencia().subscribe(
      (resp)=>{
        loading.dismiss();
        let listString = JSON.stringify(resp)     //debemos convertir a string el json que recibimos para el arreglo asisten
        this.asisten = JSON.parse(listString)
        event?.target.complete();
        console.log(this.asisten);
      }, 
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }
//============================================================================================

  
  mostrarMenu(){
    this.menuController.enable(true, 'second')
    this.menuController.open('second');
  }
}
