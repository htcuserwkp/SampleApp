import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '', 
    component: CustomerListComponent, 
    title: 'Customers'
  },
  { 
    path: 'new', 
    component: CustomerComponent, 
    title: 'New Customer' 
  },
  { 
    path: 'update/:id', 
    component: CustomerComponent, 
    title: 'Update Customer' 
  },
  { 
    path: ':id', 
    component: CustomerDetailsComponent, 
    title: 'Customer Details' 
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
