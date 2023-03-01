import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrdersResponse, OrderByIdResponse } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getCustomerOrders() {
    return this.http.get<OrdersResponse>(this.apiUrl + 'order/all');
  }

  getOrderById(id: number) {
    return this.http.get<OrderByIdResponse>(this.apiUrl + 'order/' + id);
  }
} 
