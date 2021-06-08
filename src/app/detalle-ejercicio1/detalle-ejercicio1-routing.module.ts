import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEjercicio1Page } from './detalle-ejercicio1.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEjercicio1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEjercicio1PageRoutingModule {}
