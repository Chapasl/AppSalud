import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComida2Page } from './detalle-comida2.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleComida2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleComida2PageRoutingModule {}
