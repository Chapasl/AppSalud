import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-ejercicio1',
  templateUrl: './detalle-ejercicio1.page.html',
  styleUrls: ['./detalle-ejercicio1.page.scss'],
})
export class DetalleEjercicio1Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Tatami', img:'Ingrediente_1_detalle_ejercicios_1.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
