import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-ejercicio3',
  templateUrl: './detalle-ejercicio3.page.html',
  styleUrls: ['./detalle-ejercicio3.page.scss'],
})
export class DetalleEjercicio3Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Lugar abierto', img:'Ingrediente_1_detalle_ejercicios_3.jpg'} ,
    {nombre: 'Ejercicios', img:'sección_ejercicio.jpg'} ,
    {nombre: 'Belleza', img:'sección_belleza.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
