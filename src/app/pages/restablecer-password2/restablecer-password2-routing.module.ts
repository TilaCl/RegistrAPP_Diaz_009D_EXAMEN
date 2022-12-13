import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerPassword2Page } from './restablecer-password2.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerPassword2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerPassword2PageRoutingModule {}
