import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from '../order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input()
  items!: OrderItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
