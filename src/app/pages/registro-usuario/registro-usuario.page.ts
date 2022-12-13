import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario, Docente } from '../../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})

export class RegistroUsuarioPage implements OnInit {


  formularioRegistro : FormGroup;
  newUsuario : Usuario = <Usuario>{};
  usuarioOld: Usuario[]=[];

  constructor(private alertController : AlertController,
              private navController: NavController,
              private menuController : MenuController,
              private registroService : RegistroserviceService,
              private toastController: ToastController,
              private fb : FormBuilder) { 
                this.formularioRegistro = this.fb.group({ 
                  'nombre': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'apellido': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'correo': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                  'password2': new FormControl("", Validators.required),
                  'sexo': new FormControl("", Validators.required),
                  'carrera': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'sede': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                },
                {
                  validators: this.MustMach('password','password2')
                })
              }
//---------------------------------------------------------------------------------------------------------
  ngOnInit() {
  }
//---------------------------------------------------------------------------------------------------------
    //Metodo para crear un usuario
    async CrearUsuario(){
      var form = this.formularioRegistro.value;
      var error=0;
      if (this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header: 'Error...',
          message:  'Los datos ingresados son incompletos o son incorrectos',
          buttons: ['Aceptar']
        })
        await alert.present();
      }
      else{

          this.registroService.getUsuarios().then(datos => {
            this.usuarioOld=datos;
            if(this.usuarioOld == null){
              this.newUsuario.tipo = "Estudiante";
              this.newUsuario.nomUsuario = form.nombre;
              this.newUsuario.apellidoUsuario = form.apellido;
              this.newUsuario.correoUsuario = form.correo;
              this.newUsuario.passUsuario = form.password;
              this.newUsuario.repassUsuario = form.password2;
              this.newUsuario.sexoUsuario = form.sexo;
              this.newUsuario.carreraUsuario = form.carrera;
              this.newUsuario.sedeUsuario = form.sede;
              this.registroService.addUsuario(this.newUsuario).then(dato =>{
                this.newUsuario = <Usuario>{};
                this.showToast('Usuario Creado');
              })
              this.formularioRegistro.reset();
              this.navController.navigateRoot('inicio-sesion'); 
            }
            else{
              for (let obj of this.usuarioOld){
                if(form.correo == obj.correoUsuario){
                  this.showToast('Error, ya existe un usuario con ese correo')
                  error=1;
                }
              }
              if(error == 0){
                this.newUsuario.tipo = "Estudiante";
                this.newUsuario.nomUsuario = form.nombre;
                this.newUsuario.apellidoUsuario = form.apellido;
                this.newUsuario.correoUsuario = form.correo;
                this.newUsuario.passUsuario = form.password;
                this.newUsuario.repassUsuario = form.password2;
                this.newUsuario.sexoUsuario = form.sexo;
                this.newUsuario.carreraUsuario = form.carrera;
                this.newUsuario.sedeUsuario = form.sede;
                this.registroService.addUsuario(this.newUsuario).then(dato =>{
                  this.newUsuario = <Usuario>{};
                  this.showToast('Usuario Creado');
                })
                this.formularioRegistro.reset();
                this.navController.navigateRoot('inicio-sesion');            
              }
            }
            
  
          })

        
        
      }//Fin de else
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
