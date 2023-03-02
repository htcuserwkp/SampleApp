import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent  implements OnInit {
  customer= new Customer();

  constructor(
    private customerService: CustomerService, 
    private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addCustomer() {
    this.customerService.addCustomer(this.customer).subscribe({
      next: response => {
        this.toastr.success(response.message);
        this.router.navigateByUrl('/customers');
      },
      error: err => {console.log(err)}
    });
  }
}