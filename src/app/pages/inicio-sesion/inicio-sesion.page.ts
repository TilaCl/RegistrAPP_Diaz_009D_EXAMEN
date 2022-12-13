import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { RegistroserviceService, Usuario, Docente } from '../../../services/registroservice.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios : Usuario[] = [];
  docente : Docente[] = [];

  constructor(private alertController: AlertController,
              private menuController : MenuController, 
              private navController: NavController, 
              private registroService: RegistroserviceService,
              private fb: FormBuilder) {

      this.formularioLogin=fb.group({ 
        'tipo' : new FormControl("", Validators.required),
        'correo' : new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required)
      })
     }

  ngOnInit() {
    this.menuController.enable(false);
    this.menuController.close('first');
    this.menuController.close('second')
  }
//---------------------------------------------------------------------------------------------------------
    //Metodo que comprueba la existencia del usuario en el storage
    async Ingresar(){
      var f = this.formularioLogin.value; 
      var a = 0;
      var b;
      if(this.formularioLogin.invalid)
      {
        this.alertMsg();
      }
      else{
        if( f.tipo == "Estudiante"){
          this.registroService.getUsuarios().then(datos => { 
            this.usuarios=datos;
            if (this.usuarios == null){
              this.alertMsg();
            }
            else{
              for (let obj of this.usuarios){
                if (f.tipo == obj.tipo && f.correo == obj.correoUsuario && f.password==obj.passUsuario){
                  a=1;
                  b=obj.correoUsuario;
                  console.log('ingresado');
                  localStorage.setItem('correo', b)
                  localStorage.setItem('ingresado1', 'true');
                  this.navController.navigateRoot('inicio'); //Habilitamos page de inicio una vez logueado
                }
    
            }//Fin del ciclo FOR
            if (a==0){
              this.alertMsg();
            }
            }
            
        });
        }
        else{
          this.registroService.getDocente().then(datos2 => {
            this.docente=datos2;
            if (this.docente == null){
              this.alertMsg();
            }
            else{
              for (let obj of this.docente){
                if (f.tipo == obj.tipo && f.correo == obj.correoDocente && f.password==obj.passDocente){
                  a=1;
                  b=obj.correoDocente;
                  console.log('ingresado');
                  localStorage.setItem('ingresado2', 'true');
                  localStorage.setItem('correo', b)
                  this.navController.navigateRoot('inicio-docente'); //Habilitamos page de inicio una vez logueado
                }
    
            }//Fin del ciclo FOR
            if (a==0){
              this.alertMsg();
            }
            }
            
          })
        }
      }
      
      
      
  
  }
//---------------------------------------------------------------------------------------------------------  
  //Alerta para decir que los datos son incorrectos
  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      mode: 'ios',
      message:  'Los datos ingresados son incompletos o son incorrectos',
      buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }
//---------------------------------------------------------------------------------------------------------  
//Alerta para decir que no se ha rellenado con datos
async incompletoMsg(){
  const alert = await this.alertController.create({ 
    header: 'Error..',
    mode: 'ios',
    message: 'No has ingresado datos',
    buttons: ['Aceptar']
  });
  await alert.present();
  return;
}
//---------------------------------------------------------------------------------------------------------  
  async registroAlumno(){
    this.navController.navigateRoot('registro-usuario');
  }

}
