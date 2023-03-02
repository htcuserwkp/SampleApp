import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute, 
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.customer.id = id;
      this.getData(id);
    }
  }

  get f() {
    return this.customerForm.controls;
  }

  getData(id:number) {
    this.customerService.getCustomer(id).subscribe({
      next: response => {
        if(response.data){
          this.customerForm.patchValue(response.data);
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onSubmit() {
    this.customer.name = this.customerForm.get('name')!.value;
    this.customer.email = this.customerForm.get('email')!.value;
    this.customer.phone = this.customerForm.get('phone')!.value;

    this.customer.id 
    ? this.updateCustomer() 
    : this.addCustomer()
  }

  addCustomer(){
    this.customerService.addCustomer(this.customer).subscribe({
      next: response => {
        this.toastr.success(response.message);
        this.router.navigateByUrl('/customers');
      },
      error: err => {
        console.log(err);
      }
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe({
      next: response => {
        this.toastr.success(response.message);
        this.router.navigateByUrl('/customers');
      },
      error: err => {
        console.log(err);
      }
    });
  }
}


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { Customer } from '../customer';
// import { CustomerService } from '../customer.service';

// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.scss']
// })
// export class CustomerComponent  implements OnInit {
//   customer= new Customer();

//   constructor(
//     private customerService: CustomerService, 
//     private router: Router, 
//     private toastr: ToastrService) { }

//   ngOnInit(): void {
//   }

//   addCustomer() {
//     this.customerService.addCustomer(this.customer).subscribe({
//       next: response => {
//         this.toastr.success(response.message);
//         this.router.navigateByUrl('/customers');
//       },
//       error: err => {console.log(err)}
//     });
//   }

//   updateCustomer(customer: Customer) {
//     this.customerService.updateCustomer(this.customer).subscribe({
//       next: response => {
//         this.toastr.success(response.message);
//         this.router.navigateByUrl('/customers');
//       },
//       error: err => {console.log(err)}
//     });
//   }
// }