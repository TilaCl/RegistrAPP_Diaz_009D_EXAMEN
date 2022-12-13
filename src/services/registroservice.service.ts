import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Usuario{
  tipo: string;
  nomUsuario: string;
  apellidoUsuario: string;
  correoUsuario:string;
  passUsuario:string;
  repassUsuario:string;
  sexoUsuario: string;
  carreraUsuario: string;
  sedeUsuario: string;
}

export interface Docente{
  tipo: string;
  nomDocente: string;
  apellidoDocente: string;
  correoDocente:string;
  passDocente:string;
  repassDocente:string;
  sexoDocente: string;
  facultadDocente: string;
  sedeDocente: string;
  tituloDocente: string;
}

export interface Asistencia{
  datoAsis: String;
  nombre: String;
  apellido: String;
}

const USERS_KEY ='my-usuarios';
const ASIS_KEY = "my-asistencias"

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  private _storage: Storage;
  UsuariosOld: Usuario[]=[];
  DocenteOld: Docente[]=[];
  AsisOld: Asistencia[]=[];
  UsuarioEncontrado: any;


  constructor(private storage: Storage,
              private http: HttpClient) {
    this.init();
   }
//---------------------------------------------------------------------------------------------------------
  //Metodo para crear el almacen de usuarios 
  async init(){ 
    const storage = await this.storage.create();
    this._storage = storage;
  }
//---------------------------------------------------------------------------------------------------------
  //Metodo para crear un nuevo usuario
  async addUsuario(dato: Usuario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{ 
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }
//---------------------------------------------------------------------------------------------------------
  //Metodo que devuelve los objetos del storage
  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }
//---------------------------------------------------------------------------------------------------------
  //Metodo para crear un nuevo usuario
  async addDocente(dato: Docente):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Docente[])=>{ 
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }
//---------------------------------------------------------------------------------------------------------
  //Metodo que devuelve los objetos del storage
  async getDocente():Promise<Docente[]>{
    return this.storage.get(USERS_KEY);
  }
//---------------------------------------------------------------------------------------------------------
  async ObtenerUsuario(correo: String){
    return this.getUsuarios().then(datos => {
      this.UsuariosOld = datos;
      for (let obj of this.UsuariosOld) {
        if (obj.correoUsuario == correo) {
          if (obj.tipo == "Estudiante") {
            this.UsuarioEncontrado = obj;
            return this.UsuarioEncontrado;
          }
        }
      }
    });
  }

  //---------------------------------------------------------------------------------------------------------
  async ObtenerDocente(correo: String){
    return this.getDocente().then(datos => {
      this.DocenteOld = datos;
      for (let obj of this.DocenteOld) {
        if (obj.correoDocente == correo) {
          if (obj.tipo == "Docente") {
            this.UsuarioEncontrado = obj;
            return this.UsuarioEncontrado;
          }
        }
      }
    });
  }
  //---------------------------------------------------------------------------------------------------------
  //Metodo para crear una asistencia
  async addAsistencia(dato: Asistencia):Promise<any>{
    return this.storage.get(ASIS_KEY).then((datos: Asistencia[])=>{ 
      if(datos){
        datos.push(dato);
        return this.storage.set(ASIS_KEY, datos);
      }
      else{
        return this.storage.set(ASIS_KEY, [dato]);
      }
    })
  }
  //---------------------------------------------------------------------------------------------------------
  //Metodo que devuelve los objetos del storage
  async getAsistencia():Promise<Asistencia[]>{
    return this.storage.get(ASIS_KEY);
  }
    //---------------------------------------------------------------------------------------------------------
    async ObtenerAsistencia(dato: String){
      return this.getAsistencia().then(datos => {
        this.AsisOld = datos;
        for (let obj of this.AsisOld) {
          if (obj.datoAsis == dato) {
            this.UsuarioEncontrado = obj;
            return this.UsuarioEncontrado;
          }
        }
      });
    }

//---------------------------------------------------------------------------------------------------------
    crearAsistencia(newAsis: Asistencia):Observable<Asistencia>{
    return this.http.post<Asistencia>(`${environment.apiURL}/asistencia`,newAsis)
  }
//---------------------------------------------------------------------------------------------------------
    listarAsistencia():Observable<Asistencia>{
    return this.http.get<Asistencia>(`${environment.apiURL}/Asistencia`)
  }
}