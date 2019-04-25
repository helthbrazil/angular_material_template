import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { customColors } from './data';

@Component({
  selector: 'app-ngxcharts',
  templateUrl: './ngxcharts.component.html',
  styleUrls: ['./ngxcharts.component.css']
})
export class NgxchartsComponent implements OnInit {
  single: any[];
  view: any[] = [700, 400];
  customColors: any[];

  constructor() { }

  ngOnInit() {
    Object.assign(this, { single });
    Object.assign(this, { customColors });
  }
  mostrarDetalhes() {
    alert('mostrar detalhes');
  }


}
