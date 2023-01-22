import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/order.interface';
import { OrderListService } from 'src/app/service/order-list.service';

@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.scss']
})
export class OrdertableComponent implements OnInit{
  data:Data[]= []
  currentpage:number = 1
  LastPage!:number;
  isLoadingResults:boolean = false;
  isRateLimitReached:boolean = true;
  constructor(  private orderservice: OrderListService,){}
  ngOnInit(): void {
    this.getAllOrders()
  }
  getAllOrders() {
    this.orderservice.getAllOrders(this.currentpage).subscribe((res) => {
      this.isLoadingResults = false
      this.data = res.data;      
      this.currentpage = res.pagination.currentPage
    });
  }
  OnNextClick(){
    this.currentpage++
   setTimeout(() => {
    this.getAllOrders()
   }, 500);
    this.isLoadingResults = true
  }
  OnPrevClick(){
    this.currentpage--
    setTimeout(() => {
      this.getAllOrders()
     }, 500);
    this.isLoadingResults = true
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
    return returnStatus
  }
}
