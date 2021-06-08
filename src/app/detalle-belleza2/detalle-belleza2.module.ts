import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleBelleza2PageRoutingModule } from './detalle-belleza2-routing.module';

import { DetalleBelleza2Page } from './detalle-belleza2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleBelleza2PageRoutingModule
  ],
  declarations: [DetalleBelleza2Page]
})
export class DetalleBelleza2PageModule {}
