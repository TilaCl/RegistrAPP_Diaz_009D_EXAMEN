import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriadosDocentePage } from './feriados-docente.page';

const routes: Routes = [
  {
    path: '',
    component: FeriadosDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriadosDocentePageRoutingModule {}
