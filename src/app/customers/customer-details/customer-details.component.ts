import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer = new Customer();

  constructor(
    private customerService: CustomerService, 
    private toastr: ToastrService,
    private route: ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
      this.getCustomer();
    }
  
    getCustomer(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.customerService.getCustomer(id).subscribe({
        next: (response) => {
          this.customer = response.data;
        },
        error: (err: any) => {console.log(err)}
      });
      // this.customerService.getCustomer(id)
      //   .subscribe(customer => this.customer = customer);
    }
  
    // deleteCustomer(id: number): void {
    //   this.customerService.deleteCustomer(id)
    //     .subscribe(() => this.router.navigateByUrl('/customers'));
    // }

    deleteCustomer(id: number) {
      this.customerService.deleteCustomer(id).subscribe({
        next: (response) => {
          this.toastr.success(response.message);
          this.router.navigateByUrl('/customers');
        },
        error: (err: any) => {console.log(err)}
      });
    }
}