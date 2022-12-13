import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriadosDocentePageRoutingModule } from './feriados-docente-routing.module';

import { FeriadosDocentePage } from './feriados-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriadosDocentePageRoutingModule
  ],
  declarations: [FeriadosDocentePage]
})
export class FeriadosDocentePageModule {}
