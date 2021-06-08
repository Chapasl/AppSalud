import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryEjercicioPageRoutingModule } from './category-ejercicio-routing.module';

import { CategoryEjercicioPage } from './category-ejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryEjercicioPageRoutingModule
  ],
  declarations: [CategoryEjercicioPage]
})
export class CategoryEjercicioPageModule {}
