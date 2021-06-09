import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-ejercicio2',
  templateUrl: './detalle-ejercicio2.page.html',
  styleUrls: ['./detalle-ejercicio2.page.scss'],
})
export class DetalleEjercicio2Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Tatami', img:'Ingrediente_1_detalle_ejercicios_1.jpg'} ,
    {nombre: 'Pesas', img:'Ingrediente_1_detalle_ejercicios_2.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
