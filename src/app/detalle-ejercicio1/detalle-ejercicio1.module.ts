import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEjercicio1PageRoutingModule } from './detalle-ejercicio1-routing.module';

import { DetalleEjercicio1Page } from './detalle-ejercicio1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleEjercicio1PageRoutingModule
  ],
  declarations: [DetalleEjercicio1Page]
})
export class DetalleEjercicio1PageModule {}
