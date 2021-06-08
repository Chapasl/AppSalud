import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComida2PageRoutingModule } from './detalle-comida2-routing.module';

import { DetalleComida2Page } from './detalle-comida2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleComida2PageRoutingModule
  ],
  declarations: [DetalleComida2Page]
})
export class DetalleComida2PageModule {}
