import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from 'src/app/service/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  canvas: any;
  ctx: any;
  labels:any[] =[]
  dataset : any[] =[]
  @ViewChild('mychart') mychart: any;
  constructor(private chartservice: ChartService) {}
  ngOnInit(): void {
    this.getAlldays();
   
  }
  InitChart(){
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: "Last 7 days",
            data: this.dataset,
            backgroundColor: 'rgb(115 185 243 / 65%)',
            borderColor: '#007ee7',
            fill: true
          }
        ],
        labels: this.labels,
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
  getAlldays() {
  const days =   [ "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.chartservice.getAlldays().subscribe((res) => {
      console.log(res);
      
    this.labels = Object.keys(res.data.last7Days)
    this.labels =   this.labels.map(ele =>{
        let date = new Date(ele)
        return `${date.getDate()} ${days[date.getDay()]}  `
      })
      this.labels.reverse()
      console.log(this.labels);
      this.dataset =  Object.values(res.data.last7Days)
      this.dataset = this.dataset.reverse()
      
      this.InitChart()
    });

  }
}
