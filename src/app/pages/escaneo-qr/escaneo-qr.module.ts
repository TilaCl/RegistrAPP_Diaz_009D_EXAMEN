import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscaneoQrPageRoutingModule } from './escaneo-qr-routing.module';

import { EscaneoQrPage } from './escaneo-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscaneoQrPageRoutingModule
  ],
  declarations: [EscaneoQrPage]
})
export class EscaneoQrPageModule {}
