import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico5',
  templateUrl: './grafico5.component.html',
  styleUrls: ['./grafico5.component.css']
})
export class Grafico5Component {
  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
