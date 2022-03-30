import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../../../Services/products.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  productos_idx: any= [];
  productos_encontrados: any= [];
  textoBusq: any = [];
  loading = true;
 
  constructor(private productsService: ProductsService,
              private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.textoBusq = this.activateRouter.snapshot.paramMap.get('textoBusq')

    this.textoBusq = this.textoBusq.toLowerCase();

    this.productsService.getProductsIdx()

    .subscribe((resp:any)=> {

      this.productos_idx= resp; 

      console.log(this.productos_idx);

      this.productos_idx.forEach((prod: any )=> {

        let categoria=prod.categoria.toLowerCase();

      if(prod.categoria.indexOf(this.textoBusq)>= 0){

        this.productos_encontrados.push(prod);
      }
      });
      setTimeout(() =>{
        this.loading =false;
      },1000)
      console.log(this.productos_encontrados);
    })
  }

}
