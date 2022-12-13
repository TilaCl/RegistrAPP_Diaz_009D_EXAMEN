import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaAlumnosPageRoutingModule } from './asistencia-alumnos-routing.module';

import { AsistenciaAlumnosPage } from './asistencia-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaAlumnosPageRoutingModule
  ],
  declarations: [AsistenciaAlumnosPage]
})
export class AsistenciaAlumnosPageModule {}
