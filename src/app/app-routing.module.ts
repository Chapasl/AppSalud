import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'category-comida',
    loadChildren: () => import('./category-comida/category-comida.module').then( m => m.CategoryComidaPageModule)
  },
  {
    path: 'category-ejercicio',
    loadChildren: () => import('./category-ejercicio/category-ejercicio.module').then( m => m.CategoryEjercicioPageModule)
  },
  {
    path: 'category-belleza',
    loadChildren: () => import('./category-belleza/category-belleza.module').then( m => m.CategoryBellezaPageModule)
  },
  {
    path: 'detalle-comida',
    loadChildren: () => import('./detalle-comida/detalle-comida.module').then( m => m.DetalleComidaPageModule)
  },
  {
    path: 'detalle-comida2',
    loadChildren: () => import('./detalle-comida2/detalle-comida2.module').then( m => m.DetalleComida2PageModule)
  },
  {
    path: 'detalle-comida3',
    loadChildren: () => import('./detalle-comida3/detalle-comida3.module').then( m => m.DetalleComida3PageModule)
  },
  {
    path: 'detalle-ejercicio1',
    loadChildren: () => import('./detalle-ejercicio1/detalle-ejercicio1.module').then( m => m.DetalleEjercicio1PageModule)
  },
  {
    path: 'detalle-ejercicio2',
    loadChildren: () => import('./detalle-ejercicio2/detalle-ejercicio2.module').then( m => m.DetalleEjercicio2PageModule)
  },
  {
    path: 'detalle-ejercicio3',
    loadChildren: () => import('./detalle-ejercicio3/detalle-ejercicio3.module').then( m => m.DetalleEjercicio3PageModule)
  },
  {
    path: 'detalle-belleza1',
    loadChildren: () => import('./detalle-belleza1/detalle-belleza1.module').then( m => m.DetalleBelleza1PageModule)
  },
  {
    path: 'detalle-belleza2',
    loadChildren: () => import('./detalle-belleza2/detalle-belleza2.module').then( m => m.DetalleBelleza2PageModule)
  },
  {
    path: 'detalle-belleza3',
    loadChildren: () => import('./detalle-belleza3/detalle-belleza3.module').then( m => m.DetalleBelleza3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
