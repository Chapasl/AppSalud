import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-belleza3',
  templateUrl: './detalle-belleza3.page.html',
  styleUrls: ['./detalle-belleza3.page.scss'],
})
export class DetalleBelleza3Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Lugar tranquilo', img:'Ingrediente_3_detalle_belleza_3'} ,
    {nombre: 'Velas aromáticas', img:'Ingrediente_2_detalle_belleza_3'} ,
    {nombre: 'Asiento comodo', img:'Ingrediente_1_detalle_belleza_3'}];
  constructor() { }

  ngOnInit() {
  }

}
