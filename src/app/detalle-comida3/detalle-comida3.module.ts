import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComida3PageRoutingModule } from './detalle-comida3-routing.module';

import { DetalleComida3Page } from './detalle-comida3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleComida3PageRoutingModule
  ],
  declarations: [DetalleComida3Page]
})
export class DetalleComida3PageModule {}
