import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEjercicio3PageRoutingModule } from './detalle-ejercicio3-routing.module';

import { DetalleEjercicio3Page } from './detalle-ejercicio3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleEjercicio3PageRoutingModule
  ],
  declarations: [DetalleEjercicio3Page]
})
export class DetalleEjercicio3PageModule {}
