import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-belleza',
  templateUrl: './category-belleza.page.html',
  styleUrls: ['./category-belleza.page.scss'],
})
export class CategoryBellezaPage implements OnInit {
// eslint-disable-next-line max-len
  bellezaArray = [{nombre: 'Escalador (mountain climbers)', img:'category_belleza_1.jpg', description:'El escalador es un excelente ejercicio para fortalecer el abdomen, brazos y hombros. Es sencillo y sus resultados son magníficos.', tiempo: '10 min', grado: 'Fácil', linkpage: '/detalle-belleza1'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_belleza_2.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-belleza2'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Postres naturales', img:'category_belleza_3.jpg', description:'La receta de hoy les va a encantar, no puede ser más fácil y tampoco estar más rica.', tiempo: '30 min', grado: 'Medio', linkpage: '/detalle-belleza3'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_belleza_4.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-belleza1'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_belleza_5.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-belleza2'} ];

  constructor() { }

  ngOnInit() {
  }

}
