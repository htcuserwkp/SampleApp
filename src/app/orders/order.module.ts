import { NgModule } from '@angular/core';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderItemComponent } from './order-item/order-item.component';
import { NgProgressModule } from 'ngx-progressbar';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailsComponent,
    OrderItemComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    NgProgressModule,
    OrderRoutingModule
  ],
  exports: [
    OrderListComponent
  ]
})
export class OrderModule { }
