import { Component, OnInit } from '@angular/core';
import { percentage, summary2 } from 'src/app/model/summary.interface';
import { SummaryService } from 'src/app/service/summary.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  summeryArray: summary2[] = [];
  summeryArray2: percentage[] = [];
  count: number[] = [];
  overview: any[] = [];
  colors = ['alert-info', 'alert-success', 'alert-warning'];
 
  constructor(private summeryservie: SummaryService) {}
  ngOnInit(): void {
    this.getAllSummery();
  }
  getAllSummery() {
    this.summeryservie.getAllsummery().subscribe((res) => {
      for (let key in res.data.overview) {
        this.overview.push(res.data.overview[key]);
      } 
      this.overview.forEach((element) => {
        let data = element[0];
        for (let key in data) {
          this.summeryArray.push({ name: key, value: data[key] });
        }
      });
      console.log();
      
      this.summeryArray2 = res.data.summary;
      //count & percentage
      this.count = this.summeryArray2.map((ele) => ele.count);
      let total = this.count.reduce((accu, curr) => {
        return (accu = accu + curr);
      }, 0);  
      this.summeryArray2.forEach((ele) => {
        ele.percentage = Math.round(ele.count/total * 100)
      });
      console.log(this.summeryArray2);
      
    });
  }

  getName(name: string) {
    let retunName = '';
    switch (name) {
      case 'total_earnings':
        retunName = 'Total earnings';
        break;
      case 'average_sale':
        retunName = 'Average Sale';
        break;
      case 'new_orders':
        retunName = 'New Orders';
        break;
    }
    return retunName;
  }

  getStatus(status: string) {
    let returnStatus = '';
    if (status === 'processing') {
      returnStatus = 'Processinng';
    } else if (status === 'in delivery') {
      returnStatus = 'In Delivery';
    } else if (status === 'refund') {
      returnStatus = 'Refund';
    } else if (status === 'delivered') {
      returnStatus = 'Delivered';
    } else if (status === 'cancelled') {
      returnStatus = 'Cancelled';
    }
    return returnStatus;
  }

}
