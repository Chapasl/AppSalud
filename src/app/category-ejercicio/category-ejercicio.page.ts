import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-ejercicio',
  templateUrl: './category-ejercicio.page.html',
  styleUrls: ['./category-ejercicio.page.scss'],
})
export class CategoryEjercicioPage implements OnInit {
// eslint-disable-next-line max-len
  ejercicioArray = [{nombre: 'Estiramientos y calistenia', img:'category_ejercicio_1.jpg', description:'La mejor forma de mantenerte saludable es realizar una pequeña pero eficaz rutina de estiramiento para activar el cuerpo.', tiempo: '10 min', grado: 'Fácil', linkpage: '/detalle-ejercicio1'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Rutina de ejercicios para interior', img:'category_ejercicio_2.jpg', description:'Mantente seguro y saludable con nuestra rutina de ejercicios.', tiempo: '20 min', grado: 'Fácil', linkpage: '/detalle-ejercicio2'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Rutina de ejercicios para exterior', img:'category_ejercicio_3.jpg', description:'En esta epoca de pandemia, puedes alejarte de la multitud y realizar una rutina de ejercicios.', tiempo: '50 min', grado: 'Medio', linkpage: '/detalle-ejercicio3'}];

  constructor() { }

  ngOnInit() {
  }

}
