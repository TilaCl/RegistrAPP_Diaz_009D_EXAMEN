import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Docente  } from '../../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { MenuController  } from '@ionic/angular';

@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.page.html',
  styleUrls: ['./registro-docente.page.scss'],
})
export class RegistroDocentePage implements OnInit {

  formularioRegistroDocente : FormGroup;
  newDocente : Docente = <Docente>{};
  usuarioOld: Docente[]=[];

  constructor(private menuController : MenuController,
              private navController : NavController,
              private alertController : AlertController,
              private registroService : RegistroserviceService,
              private toastController : ToastController,
              private fb : FormBuilder) {
                this.formularioRegistroDocente = this.fb.group({
                  'nombre': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'apellido': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'correo': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                  'password2': new FormControl("", Validators.required),
                  'sexo': new FormControl("", Validators.required),
                  'facultad': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'sede': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'titulo': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                },
                {
                  validators: this.MustMach('password','password2')
                })
               }
//---------------------------------------------------------------------------------------------------------
  ngOnInit() {
  }
//---------------------------------------------------------------------------------------------------------

noIniciado(){
  this.menuController.enable(false);
}

//---------------------------------------------------------------------------------------------------------
    //Metodo para crear un Usuario Docente
    async CrearDocente(){
      var form = this.formularioRegistroDocente.value;
      var error= 0;
      if (this.formularioRegistroDocente.invalid){
        const alert = await this.alertController.create({
          header: 'Error...',
          message: 'Los datos ingresados son incompletos o son incorrectos',
          buttons: ['Aceptar']
        })
        await alert.present();
      }
      else{

        this.registroService.getDocente().then(datos => {
          this.usuarioOld=datos;
          if(this.usuarioOld == null){
            this.newDocente.tipo = "Docente";
            this.newDocente.nomDocente = form.nombre;
            this.newDocente.apellidoDocente = form.apellido;
            this.newDocente.correoDocente = form.correo;
            this.newDocente.passDocente = form.password;
            this.newDocente.repassDocente = form.password2;
            this.newDocente.sexoDocente = form.sexo;
            this.newDocente.facultadDocente = form.facultad;
            this.newDocente.sedeDocente = form.sede;
            this.newDocente.tituloDocente = form.titulo;
            this.registroService.addDocente(this.newDocente).then(dato =>{
              this.newDocente = <Docente>{};
              this.showToast('Docente Creado');
            })
            this.formularioRegistroDocente.reset();
            this.navController.navigateRoot('inicio-sesion'); //Habilitamos page de inicio una vez logueado
    
          }

          else{
            for (let obj of this.usuarioOld){
              if(form.correo == obj.correoDocente){
                this.showToast('Error, ya existe un usuario con ese correo')
                error=1;
              }
            }
            if (error == 0){
              this.newDocente.tipo = "Docente";
              this.newDocente.nomDocente = form.nombre;
              this.newDocente.apellidoDocente = form.apellido;
              this.newDocente.correoDocente = form.correo;
              this.newDocente.passDocente = form.password;
              this.newDocente.repassDocente = form.password2;
              this.newDocente.sexoDocente = form.sexo;
              this.newDocente.facultadDocente = form.facultad;
              this.newDocente.sedeDocente = form.sede;
              this.newDocente.tituloDocente = form.titulo;
              this.registroService.addDocente(this.newDocente).then(dato =>{
                this.newDocente = <Docente>{};
                this.showToast('Docente Creado');
              })
              this.formularioRegistroDocente.reset();
              this.navController.navigateRoot('inicio-sesion'); //Habilitamos page de inicio una vez logueado
      
            }
          }
        })
      }//Fin de else
    }
//---------------------------------------------------------------------------------------------------------
    //Alerta con Toast para informar que el Docente ha sido creado con una duracion de 2 segundos en pantalla.
    async showToast(msg){
      const toast = await this.toastController.create({
        message : msg,
        duration: 2000
      })
      toast.present();
    }
//---------------------------------------------------------------------------------------------------------
    //Metodo MustMach es para verificar que las dos contraseñas sean iguales, en caso contrario no puede registrarse.
    MustMach(controlName: string , matchingControlName: string){
      return(formGroup:FormGroup)=>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if(matchingControl.errors && !matchingControl.errors.MustMach){
          return
        }
        if(control.value !== matchingControl.value){
          matchingControl.setErrors({MustMach:true});
        }
        else{
          matchingControl.setErrors(null);
        }
      }
    }

}
