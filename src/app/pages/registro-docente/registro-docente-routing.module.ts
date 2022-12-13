import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDocentePage } from './registro-docente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDocentePageRoutingModule {}
