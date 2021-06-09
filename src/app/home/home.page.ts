import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Comidas', img:'sección_comida.jpg', linkpage: 'category-comida'} ,
    {nombre: 'Ejercicios', img:'sección_ejercicio.jpg', linkpage: 'category-ejercicio'} ,
    {nombre: 'Belleza', img:'sección_belleza.jpg', linkpage: 'category-belleza'}];
  // eslint-disable-next-line max-len
  popularesArray = [{nombre: 'Escalador (mountain climbers)', img:'category_ejercicio_1.jpg', description:'El escalador es un excelente ejercicio para fortalecer el abdomen, brazos y hombros. Es sencillo y sus resultados son magníficos.', tiempo: '10 min', grado: 'Fácil', linkpage: 'detalle-ejercicio1'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_belleza_1.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: 'detalle-belleza1'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Postres naturales', img:'category_comida_1.jpg', description:'La receta de hoy les va a encantar, no puede ser más fácil y tampoco estar más rica.', tiempo: '30 min', grado: 'Medio', linkpage: 'detalle-comida'}];
  constructor() {}

}
