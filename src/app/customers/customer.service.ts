import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer, CustomersResponse } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Customer[]>(this.apiUrl + 'Customer');
  }
}
