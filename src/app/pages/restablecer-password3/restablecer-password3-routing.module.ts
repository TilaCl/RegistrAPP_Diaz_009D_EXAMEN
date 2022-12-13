import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerPassword3Page } from './restablecer-password3.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerPassword3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerPassword3PageRoutingModule {}
