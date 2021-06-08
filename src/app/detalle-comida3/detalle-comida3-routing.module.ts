import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComida3Page } from './detalle-comida3.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleComida3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleComida3PageRoutingModule {}
