import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleBelleza1PageRoutingModule } from './detalle-belleza1-routing.module';

import { DetalleBelleza1Page } from './detalle-belleza1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleBelleza1PageRoutingModule
  ],
  declarations: [DetalleBelleza1Page]
})
export class DetalleBelleza1PageModule {}
