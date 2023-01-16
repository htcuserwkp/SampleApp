import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getTestData(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.apiUrl+'/WeatherForecast');
  }
}
