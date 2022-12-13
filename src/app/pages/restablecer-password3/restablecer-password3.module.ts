import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerPassword3PageRoutingModule } from './restablecer-password3-routing.module';

import { RestablecerPassword3Page } from './restablecer-password3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerPassword3PageRoutingModule
  ],
  declarations: [RestablecerPassword3Page]
})
export class RestablecerPassword3PageModule {}
