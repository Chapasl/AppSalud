import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEjercicio2PageRoutingModule } from './detalle-ejercicio2-routing.module';

import { DetalleEjercicio2Page } from './detalle-ejercicio2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleEjercicio2PageRoutingModule
  ],
  declarations: [DetalleEjercicio2Page]
})
export class DetalleEjercicio2PageModule {}
