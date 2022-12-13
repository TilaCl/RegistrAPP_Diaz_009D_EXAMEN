import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerPasswordPage } from './restablecer-password.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerPasswordPageRoutingModule {}
