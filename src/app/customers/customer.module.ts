import { NgModule } from '@angular/core';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { NgProgressModule } from 'ngx-progressbar';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule,
    CustomerRoutingModule
  ],
  exports: [
    CustomerListComponent
  ]
})
export class CustomerModule { }
