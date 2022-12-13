import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(private navController: NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('ingresado1')){
      this.navController.navigateRoot('inicio');
      return false; 
    }
    if(localStorage.getItem('ingresado2')){
      this.navController.navigateRoot('inicio-docente');
      return false; 
    }
    else{
      return true;
    }
     
  }
  
}
