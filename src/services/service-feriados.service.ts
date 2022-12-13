import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feriados } from '../app/pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceFeriadosService {

  constructor(private Http:HttpClient) { }

  getFeriados(){
    return this.Http.get<any>('https://api.victorsanmartin.com/feriados/en.json')
    //https://apis.digital.gob.cl/fl/feriados/2022?offset=1
  }


}
