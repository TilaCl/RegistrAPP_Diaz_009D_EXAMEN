import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaAlumnosPage } from './asistencia-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaAlumnosPageRoutingModule {}
