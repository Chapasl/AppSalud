import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEjercicio3Page } from './detalle-ejercicio3.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEjercicio3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEjercicio3PageRoutingModule {}
