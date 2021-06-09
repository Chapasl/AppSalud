import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-comida3',
  templateUrl: './detalle-comida3.page.html',
  styleUrls: ['./detalle-comida3.page.scss'],
})
export class DetalleComida3Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Pinchos de madera', img:'Ingrediente_1_detalle_comida_3.jpg'} ,
    {nombre: 'Vegetales', img:'Ingrediente_2_detalle_comida_3.jpg'} ,
    {nombre: 'Carne de res', img:'Ingrediente_3_detalle_comida_3.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
