import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderItemComponent } from './order-item/order-item.component';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailsComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [
    
  ]
})
export class OrderModule { }
