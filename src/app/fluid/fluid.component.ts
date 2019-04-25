import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluid',
  templateUrl: './fluid.component.html',
  styleUrls: ['./fluid.component.css']
})
export class FluidComponent implements OnInit {
  gaugeType = 'semi';
  gaugeValue = 0;
  gaugeLabel = 'Velocidade';
  gaugeAppendText = 'km/hr';

  gaugeType2 = 'full';
  gaugeValue2 = 0;
  gaugeLabel2 = 'Lucro';
  gaugeAppendText2 = 'R$';

  gaugeType3 = 'semi';
  gaugeValue3 = 0;
  gaugeLabel3 = 'Speed';
  gaugeAppendText3 = 'km/hr';

  gaugeType4 = 'semi';
  gaugeValue4 = 0;
  gaugeLabel4 = 'Speed';
  gaugeAppendText4 = 'km/hr';
  breakpoint: number;

  constructor() { }

  ngOnInit() {
    this.random();
    this.randomize();
    this.breakpoint = (window.innerWidth <= 1600) ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1600) ? 1 : 6;
  }

  randomize() {
    setTimeout(() => {
      this.random();
      this.randomize();
    }, 2000);
  }


  private random() {
    this.gaugeValue = Math.floor(Math.random() * 100);
    this.gaugeValue2 = Math.floor(Math.random() * 100);
    this.gaugeValue3 = Math.floor(Math.random() * 100);
    this.gaugeValue4 = Math.floor(Math.random() * 100);
  }
}
