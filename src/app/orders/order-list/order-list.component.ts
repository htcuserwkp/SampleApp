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
  
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getCustomerOrders()
  }

  getCustomerOrders() {
    this.orderService.getCustomerOrders().subscribe({
      next: (response: { data: Order[]; }) => {
        this.orders = response.data;
      },
      error: (err: any) => {console.log(err)}
    });
  }
}
