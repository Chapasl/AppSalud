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
  categoriesArray = [{nombre: 'Comidas', img:'sección_comida.jpg', linkpage: 'category-comida'} ,
    {nombre: 'Ejercicios', img:'sección_ejercicio.jpg', linkpage: 'category-ejercicio'} ,
    {nombre: 'Belleza', img:'sección_belleza.jpg', linkpage: 'category-belleza'}];
  constructor() { }

  ngOnInit() {
  }

}