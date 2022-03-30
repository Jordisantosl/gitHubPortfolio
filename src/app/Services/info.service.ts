import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) {}

    getInfoPagina(){
      return this.http.get('/assets/data/infoPagina.json');
    }

    getInfoEquipo(){
       return this.http.get('https://portaapp-cce90-default-rtdb.firebaseio.com/equipo.json');
    } 
  
}
