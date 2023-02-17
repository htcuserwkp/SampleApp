import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  order!: Order;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    const orderId = +this.route.snapshot.paramMap.get('id')!;
    this.getOrderById(orderId);
  }

  getOrderById(id: number) {
    this.orderService.getOrderById(id).subscribe({
      next: (response: { data: Order; }): void => {
        this.order = response.data;
      },
      error: (err: any) => {console.log(err)}
    });
  }

  getOrderStatus(isComplete: boolean) {
    if (isComplete) {
      return 'Completed'
    } else {
      return 'In progress'
    }
  }

}
