import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { RegistroserviceService ,Asistencia } from '../../../services/registroservice.service';


@Component({
  selector: 'app-escaneo-qr',
  templateUrl: './escaneo-qr.page.html',
  styleUrls: ['./escaneo-qr.page.scss'],
})
export class EscaneoQrPage implements OnInit {

  codeQR: any;
  newAsis: Asistencia = <Asistencia>{};
  asistencia: any;
  codeOld: Asistencia[]=[];

  constructor(private alertController: AlertController,
              private menuController : MenuController,
              private registroService : RegistroserviceService,
              private toastController: ToastController,
              private barcodeScanner : BarcodeScanner) { }

  ngOnInit() {
  }

  Usuario=localStorage.getItem('correo');
  Nombre: String;
  Apellido: String;
  Promesa=this.registroService.ObtenerUsuario(this.Usuario).then((value) =>{
    this.Nombre=value.nomUsuario;
    this.Apellido=value.apellidoUsuario;
  });

  async Escaneo() {
    var error=0;
    this.barcodeScanner.scan().then(barcodeData => {
    this.codeQR=barcodeData.text;
    if(this.codeQR.includes('PGY4121_')){
      this.registroService.getAsistencia().then(datos => {
        this.codeOld=datos;
        if(this.codeOld == null){
          this.newAsis.datoAsis=this.codeQR;
          this.newAsis.nombre=this.Nombre;
          this.newAsis.apellido=this.Apellido;
          //this.registroService.crearAsistencia(this.newAsis).subscribe();
          this.registroService.addAsistencia(this.newAsis).then(dato =>{
            this.Escaneo2('Asistencia confirmada','Escaneado correctamente');
          })
          
        }
        else{
          for (let obj of this.codeOld){
            if(obj.nombre == this.Nombre && obj.apellido == this.Apellido){
              var codigoqr1=obj.datoAsis;
              var codigoqr2= this.codeQR;
              if(codigoqr1 == codigoqr2){
                this.Escaneo2('Error','Ya estas presente en esta clase')
                error=1;
              }

            }
          }
          if(error == 0){
            this.newAsis.datoAsis=this.codeQR;
            this.newAsis.nombre=this.Nombre;
            this.newAsis.apellido=this.Apellido;
            //this.registroService.crearAsistencia(this.newAsis).subscribe();
            this.registroService.addAsistencia(this.newAsis).then(dato =>{
              this.Escaneo2('Asistencia confirmada','Escaneado correctamente');
            })
          }
        }
      })
    }
    else{
      this.showToast('ha ocurrido un error')
    }
    console.log('Barcode data', this.codeQR);
    }).catch(err => {
    this.showToast(err);
    });
  }

  mostrarMenu(){
    this.menuController.enable(true, 'first')
    this.menuController.open('first');
  };


  //Este es la funcion de escaneo en caso de respaldo
  async Escaneo2(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
      mode:"ios",
    });

    await alert.present();
  }

  //---------------------------------------------------------------------------------------------------------
    //Alerta con Toast para informar que el usuario ha sido creado con una duracion de 2 segundos en pantalla.
    async showToast(msg){
      const toast = await this.toastController.create({
        message : msg,
        duration: 2000
      })
      toast.present();
    }




    //crearAnimalito(){
      //this.newAsis.datoAsis='asdasd';
      //this.newAsis.nombre=this.Nombre;
      //this.newAsis.apellido=this.Apellido;
      //this.registroService.crearAsistencia(this.newAsis).subscribe();
    //}


}