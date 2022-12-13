import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialDocentePage } from './tutorial-docente.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialDocentePageRoutingModule {}
