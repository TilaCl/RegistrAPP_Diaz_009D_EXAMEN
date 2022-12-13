import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from '../guards/ingresado.guard';
import { NoIngresadoGuard } from '../guards/no-ingresado.guard';
import { IngresadoDocenteGuard } from '../guards/ingresado-docente.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'escaneo-qr',
    loadChildren: () => import('./pages/escaneo-qr/escaneo-qr.module').then( m => m.EscaneoQrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'tutorial-docente',
    loadChildren: () => import('./pages/tutorial-docente/tutorial-docente.module').then( m => m.TutorialDocentePageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'restablecer-password',
    loadChildren: () => import('./pages/restablecer-password/restablecer-password.module').then( m => m.RestablecerPasswordPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'restablecer-password2',
    loadChildren: () => import('./pages/restablecer-password2/restablecer-password2.module').then( m => m.RestablecerPassword2PageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'restablecer-password3',
    loadChildren: () => import('./pages/restablecer-password3/restablecer-password3.module').then( m => m.RestablecerPassword3PageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro-docente',
    loadChildren: () => import('./pages/registro-docente/registro-docente.module').then( m => m.RegistroDocentePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicio-docente',
    loadChildren: () => import('./pages/inicio-docente/inicio-docente.module').then( m => m.InicioDocentePageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./pages/perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'feriados-docente',
    loadChildren: () => import('./pages/feriados-docente/feriados-docente.module').then( m => m.FeriadosDocentePageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'asistencia-alumnos',
    loadChildren: () => import('./pages/asistencia-alumnos/asistencia-alumnos.module').then( m => m.AsistenciaAlumnosPageModule),
    canActivate: [IngresadoDocenteGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
