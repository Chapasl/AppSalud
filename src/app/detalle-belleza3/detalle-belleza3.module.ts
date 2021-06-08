import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleBelleza3PageRoutingModule } from './detalle-belleza3-routing.module';

import { DetalleBelleza3Page } from './detalle-belleza3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleBelleza3PageRoutingModule
  ],
  declarations: [DetalleBelleza3Page]
})
export class DetalleBelleza3PageModule {}
