import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-comida',
  templateUrl: './category-comida.page.html',
  styleUrls: ['./category-comida.page.scss'],
})
export class CategoryComidaPage implements OnInit {

  // eslint-disable-next-line max-len
  comidaArray = [{nombre: 'Pastel sin azúcar', img:'category_comida_1.jpg', description:'Delicioso pastel con nueces, sencillo de hacer y lo más importante, sin azúcar, para cuidar la salud de tu familia.', tiempo: '60 min', grado: 'Fácil', linkpage: '/detalle-comida'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Sanduche con mayonesa saludable', img:'category_comida_2.jpg', description:'Evita el uso de mayonesa y productos grasos con esta sabrosa alternativa.', tiempo: '5 min', grado: 'Fácil', linkpage: '/detalle-comida2'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Brochetas de res', img:'category_comida_3.jpg', description:'Invita a tus familiares un delicioso aperitivo, es nutritivo y rápido.', tiempo: '30 min', grado: 'Medio', linkpage: '/detalle-comida3'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Sushi casero', img:'category_comida_4.jpg', description:'Elabora un delicioso sushi casero, sin materiales complicados de conseguir.', tiempo: '20 min', grado: 'Fácil', linkpage: '/detalle-comida'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Lomo de cerdo', img:'category_comida_5.jpg', description:'Lomo de cerdo acompañado de papas fritas, perfectas para un fin de semana en familia.', tiempo: '55 min', grado: 'Difícil', linkpage: '/detalle-comida'} ];
  constructor() { }

  ngOnInit() {
  }

}
