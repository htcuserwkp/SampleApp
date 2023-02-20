import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewCustomer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerInfo = new NewCustomer();
  public errorMessage = "";
  customerForm!: FormGroup;

  constructor(
    private customerService: CustomerService, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  addNewCustomer() {
    this.customerService.addCustomer(this.customerInfo).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }

  addCustomer(customer: NewCustomer) {
    this.customerService.addCustomer(customer).subscribe({
      next: response => {
        //this.toastr.success(response.message);
        this.router.navigateByUrl('/customers');
      },
      error: err => {console.log(err)}
    });
  }
}
