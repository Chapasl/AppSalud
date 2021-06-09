import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-belleza1',
  templateUrl: './detalle-belleza1.page.html',
  styleUrls: ['./detalle-belleza1.page.scss'],
})
export class DetalleBelleza1Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Café', img:'Ingrediente_1_detalle_belleza_1.jpg'} ,
    {nombre: 'Miel', img:'Ingrediente_2_detalle_belleza_1.jpg'} ,
    {nombre: 'Limón', img:'Ingrediente_3_detalle_belleza_1.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
