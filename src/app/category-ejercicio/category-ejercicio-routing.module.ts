import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryEjercicioPage } from './category-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryEjercicioPageRoutingModule {}
