import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../Services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fecha: any = new Date();
  anio: any;
  infopag: any ='';
  constructor(public infoService: InfoService) { 
    console.log(this.fecha);
    this.anio = this.fecha.getFullYear();
  }

  ngOnInit(): void {
    this.infoService.getInfoPagina()
    .subscribe((resp : any) => {
      this.infopag = resp;
    });
  }

}
