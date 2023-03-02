import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Food, FoodResponse, FoodsResponse } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getFoods() :Observable<FoodsResponse>{
    return this.http.get<FoodsResponse>(this.apiUrl + 'food/all');
  }

  getFood(id: number) :Observable<FoodResponse>{
    return this.http.get<FoodResponse>(this.apiUrl + 'food/'+id);
  }

  addFood(foodInfo: Food): Observable<FoodsResponse> {
    return this.http.post<FoodsResponse>(this.apiUrl+'food/add', foodInfo);
  }

  updateFood(foodInfo: Food): Observable<FoodsResponse> {
    return this.http.put<FoodsResponse>(this.apiUrl+'food/update', foodInfo);
  }

  deleteFood(id: number): Observable<FoodsResponse> {
    return this.http.delete<FoodsResponse>(this.apiUrl + 'food/' + id);
  }
}
