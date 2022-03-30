import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ItemComponent } from './Componentes/item/item.component';
import { AboutComponent } from './Componentes/Pages/about/about.component';
import { DocumentationComponent } from './Componentes/Pages/documentation/documentation.component';
import { DesignComponent } from './Componentes/Pages/design/design.component';
import { HomeComponent } from './Componentes/Pages/home/home.component';
import { BusquedaComponent } from './Componentes/Pages/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    AboutComponent,
    DocumentationComponent,
    DesignComponent,
    HomeComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
