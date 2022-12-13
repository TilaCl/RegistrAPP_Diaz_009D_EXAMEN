import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerPasswordPageRoutingModule } from './restablecer-password-routing.module';

import { RestablecerPasswordPage } from './restablecer-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerPasswordPageRoutingModule
  ],
  declarations: [RestablecerPasswordPage]
})
export class RestablecerPasswordPageModule {}
