import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer, CustomersResponse, NewCustomer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getCustomers() :Observable<CustomersResponse>{
    return this.http.get<CustomersResponse>(this.apiUrl + 'customer/all');
  }

  addCustomer(customerInfo: NewCustomer): Observable<CustomersResponse> {
    return this.http.post<CustomersResponse>(this.apiUrl+'customer/add', customerInfo);
  }

  updateCustomer(customerInfo: Customer): Observable<CustomersResponse> {
    return this.http.post<CustomersResponse>(this.apiUrl+'customer/update', customerInfo);
  }

  deleteCustomer(id: number): Observable<CustomersResponse> {
    return this.http.delete<CustomersResponse>(this.apiUrl + 'customer/' + id);
  }
}
