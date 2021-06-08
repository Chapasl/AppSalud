import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryBellezaPage } from './category-belleza.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryBellezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryBellezaPageRoutingModule {}
