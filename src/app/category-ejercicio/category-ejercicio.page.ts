import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-ejercicio',
  templateUrl: './category-ejercicio.page.html',
  styleUrls: ['./category-ejercicio.page.scss'],
})
export class CategoryEjercicioPage implements OnInit {
// eslint-disable-next-line max-len
  ejercicioArray = [{nombre: 'Escalador (mountain climbers)', img:'category_ejercicio_1.jpg', description:'El escalador es un excelente ejercicio para fortalecer el abdomen, brazos y hombros. Es sencillo y sus resultados son magníficos.', tiempo: '10 min', grado: 'Fácil', linkpage: '/detalle-ejercicio1'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_ejercicio_2.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-ejercicio2'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Postres naturales', img:'category_ejercicio_3.jpg', description:'La receta de hoy les va a encantar, no puede ser más fácil y tampoco estar más rica.', tiempo: '30 min', grado: 'Medio', linkpage: '/detalle-ejercicio3'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_ejercicio_4.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-comida2'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Mascarrillas caseras', img:'category_ejercicio_5.jpg', description:'Si tienes la piel grasa, una mascarilla sencilla de hacer y muy efectiva es la siguiente.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-comida2'} ];

  constructor() { }

  ngOnInit() {
  }

}
