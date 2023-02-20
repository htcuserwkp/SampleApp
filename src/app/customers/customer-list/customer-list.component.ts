import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  customers: Customer[] = [];
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (response) => {
        //this.customers = response.data;
        this.customers = response;
      },
      error: (err: any) => {console.log(err)}
    });
  }
}
