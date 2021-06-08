import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-belleza3',
  templateUrl: './detalle-belleza3.page.html',
  styleUrls: ['./detalle-belleza3.page.scss'],
})
export class DetalleBelleza3Page implements OnInit {
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
