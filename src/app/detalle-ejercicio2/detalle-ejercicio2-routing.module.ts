import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEjercicio2Page } from './detalle-ejercicio2.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEjercicio2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEjercicio2PageRoutingModule {}
