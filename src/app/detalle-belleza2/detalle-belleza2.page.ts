import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-belleza2',
  templateUrl: './detalle-belleza2.page.html',
  styleUrls: ['./detalle-belleza2.page.scss'],
})
export class DetalleBelleza2Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Esencias florales', img:'Ingrediente_1_detalle_belleza_2.jpg'} ,
    {nombre: 'Tina de baño', img:'Ingrediente_2_detalle_belleza_2.jpg'}];
  constructor() { }

  ngOnInit() {
  }

}
