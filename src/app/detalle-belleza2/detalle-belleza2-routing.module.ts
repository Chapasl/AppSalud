import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleBelleza2Page } from './detalle-belleza2.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleBelleza2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleBelleza2PageRoutingModule {}
