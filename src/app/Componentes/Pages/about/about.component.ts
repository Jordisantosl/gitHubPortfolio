import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../Services/info.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: any =  [];

  constructor(public infoService: InfoService) { }
  ngOnInit(): void {
    this.infoService.getInfoEquipo()
    .subscribe((resp: any)=> {
      console.log(resp);
      this.equipo = resp;
    })
  }

}
