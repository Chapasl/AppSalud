import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleBelleza1Page } from './detalle-belleza1.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleBelleza1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleBelleza1PageRoutingModule {}
