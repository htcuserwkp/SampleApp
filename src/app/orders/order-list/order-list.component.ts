import { Component } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  orders: Order[] = [];
  status!: string;
  message!:string;
  
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getCustomerOrders()
  }

  getCustomerOrders() {
    this.orderService.getCustomerOrders().subscribe({
      next: (response: { data: Order[]; }) => {
        this.orders = response.data;
      },
      error: (err: any) => {
        this.message = err.error.message;
        console.log(err);
      }
    });
  }

  deleteOrder(id:number){

  }

  getProgressValue(status: string): number {
    switch (status) {
      case 'pending':
        return 33;
      case 'paid':
        return 66;
      case 'completed':
        return 100;
      default:
        return 0;
    }
  }

  getProgressColor(status: string): string {
    switch (status) {
      case 'pending':
        return 'orange';
      case 'paid':
        return 'blue';
      case 'completed':
        return 'green';
      default:
        return 'gray';
    }
  }
}
