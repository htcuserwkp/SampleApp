import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {
    path: '', 
    component: OrderListComponent, 
    title: 'Orders'
  },

  {
    path: ':id', 
    component: OrderDetailsComponent, 
    title: 'Order',
    data: {breadcrumb: {alias: 'OrderDetails'}}
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
