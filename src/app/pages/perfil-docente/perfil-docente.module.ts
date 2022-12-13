import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDocentePageRoutingModule } from './perfil-docente-routing.module';

import { PerfilDocentePage } from './perfil-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDocentePageRoutingModule
  ],
  declarations: [PerfilDocentePage]
})
export class PerfilDocentePageModule {}
