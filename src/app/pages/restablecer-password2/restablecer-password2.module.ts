import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerPassword2PageRoutingModule } from './restablecer-password2-routing.module';

import { RestablecerPassword2Page } from './restablecer-password2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerPassword2PageRoutingModule
  ],
  declarations: [RestablecerPassword2Page]
})
export class RestablecerPassword2PageModule {}
