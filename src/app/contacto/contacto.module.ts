import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoPage } from './contacto.page';

import { ContactoPageRoutingModule } from './contacto-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContactoPageRoutingModule
  ],
  declarations: [ContactoPage]
})
export class ContactoPageModule {}
