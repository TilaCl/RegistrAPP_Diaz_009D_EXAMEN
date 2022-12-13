import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialDocentePageRoutingModule } from './tutorial-docente-routing.module';

import { TutorialDocentePage } from './tutorial-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialDocentePageRoutingModule
  ],
  declarations: [TutorialDocentePage]
})
export class TutorialDocentePageModule {}
