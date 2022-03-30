import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsIdx(){
    return this.http.get('https://portaapp-cce90-default-rtdb.firebaseio.com/productos_idx.json')
  }
  

  getProduct(codProd: string){
    return this.http.get(`https://portaapp-cce90-default-rtdb.firebaseio.com/productos/${codProd}.json`)
  }
}
