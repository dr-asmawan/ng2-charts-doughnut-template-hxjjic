import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // Doughnut
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
  };
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [20, 30,50],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public chartColors: Array<any> = [{
    backgroundColor: [
      '#FFA1B5', '#FFE199', '#ffe2e8'
    ]
  }]

  constructor() { }

  ngOnInit() {
  }
}
