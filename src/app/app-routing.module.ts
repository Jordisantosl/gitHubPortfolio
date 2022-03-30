import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './Componentes/item/item.component';
import { AboutComponent } from './Componentes/Pages/about/about.component';
import { BusquedaComponent } from './Componentes/Pages/busqueda/busqueda.component';
import { HomeComponent } from './Componentes/Pages/home/home.component';


const routes: Routes = [
 
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'home', component: HomeComponent},
  {path: 'buscar/:textoBusq', component: BusquedaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
