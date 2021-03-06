import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-comida2',
  templateUrl: './detalle-comida2.page.html',
  styleUrls: ['./detalle-comida2.page.scss'],
})
export class DetalleComida2Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Pan', img:'Ingrediente_1_detalle_comida_2.jpg'} ,
    {nombre: 'Aguacate', img:'Ingrediente_2_detalle_comida_2.jpg'} ,
    {nombre: 'Acompañamiento', img:'Ingrediente_3_detalle_comida_2.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
