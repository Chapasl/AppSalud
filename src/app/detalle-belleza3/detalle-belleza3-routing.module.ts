import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleBelleza3Page } from './detalle-belleza3.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleBelleza3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleBelleza3PageRoutingModule {}
