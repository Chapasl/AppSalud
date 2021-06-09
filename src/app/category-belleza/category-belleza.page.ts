import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-belleza',
  templateUrl: './category-belleza.page.html',
  styleUrls: ['./category-belleza.page.scss'],
})
export class CategoryBellezaPage implements OnInit {
// eslint-disable-next-line max-len
  bellezaArray = [{nombre: 'Mascarilla casera', img:'category_belleza_1.jpg', description:'Crea tu rutina de belleza, con la mascarilla casera más fácil de hacer.', tiempo: '10 min', grado: 'Medio', linkpage: '/detalle-belleza1'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Terapia floral', img:'category_belleza_2.jpg', description:'Toma un baño de agua caliente de relajación acompañado de una excelente terapia floral.', tiempo: '30 min', grado: 'Medio', linkpage: '/detalle-belleza2'} ,
    // eslint-disable-next-line max-len
    {nombre: 'Terapia con velas', img:'category_belleza_3.jpg', description:'Meditación acompañada de velas aromáticas para una mejor relajación.', tiempo: '20 min', grado: 'Medio', linkpage: '/detalle-belleza3'} ];

  constructor() { }

  ngOnInit() {
  }

}
