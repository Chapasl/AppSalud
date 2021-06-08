import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryBellezaPageRoutingModule } from './category-belleza-routing.module';

import { CategoryBellezaPage } from './category-belleza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryBellezaPageRoutingModule
  ],
  declarations: [CategoryBellezaPage]
})
export class CategoryBellezaPageModule {}
