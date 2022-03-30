import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../Services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos_idx: any= [];

  loading=true;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductsIdx()
    .subscribe((resp:any)=> {
      console.log(resp);
      this.productos_idx= resp; 
      

      setTimeout(() =>{
        this.loading =false;
      },1000)
    
    })
  }

}
