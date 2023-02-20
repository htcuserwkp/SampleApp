import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  addCustomer() {
    this.customerService.addCustomer(this.customer).subscribe(() => {
      //this.toastr.success("Customer Added Successfully")
      this.router.navigate(['/customers']);
    });
  }
}