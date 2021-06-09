import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-comida',
  templateUrl: './detalle-comida.page.html',
  styleUrls: ['./detalle-comida.page.scss'],
})
export class DetalleComidaPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.6
  };
// eslint-disable-next-line @typescript-eslint/naming-convention,max-len
  categoriesArray = [{nombre: 'Harina', img:'Ingrediente_1_detalle_comida_1'} ,
    {nombre: 'Guineo Maduro', img:'Ingrediente_2_detalle_comida_1'} ,
    {nombre: 'Mantequilla', img:'Ingrediente_3_detalle_comida_1'},
    {nombre: 'Polvo de hornear', img:'Ingrediente_4_detalle_comida_1'},
    {nombre: 'Horno', img:'Ingrediente_5_detalle_comida_1'}];

  constructor() { }

  ngOnInit() {
  }

}
