import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-comida',
  templateUrl: './category-comida.page.html',
  styleUrls: ['./category-comida.page.scss'],
})
export class CategoryComidaPage implements OnInit {

  // eslint-disable-next-line max-len
  comidaArray = [{nombre: 'Escalador (mountain climbers)', img:'category_comida_1.jpg', description:'El escalador es un excelente ejercicio para fortalecer el abdomen, brazos y hombros. Es sencillo y sus resultados son magníficos.', tiempo: '10 min', grado: 'Fácil', linkpage: '/detalle-comida'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_comida_2.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-comida2'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Postres naturales', img:'category_comida_3.jpg', description:'La receta de hoy les va a encantar, no puede ser más fácil y tampoco estar más rica.', tiempo: '30 min', grado: 'Medio', linkpage: '/detalle-comida3'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_comida_4.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-comida'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_comida_5.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-comida'} ];
  constructor() { }

  ngOnInit() {
  }

}
