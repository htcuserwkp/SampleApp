import { Component, OnInit } from '@angular/core';
import { Weather } from './test';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  weatherData: Weather[] = [];
  isFahrenheit: boolean = false;
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getTestData();
  }

  refresh() {
    this.getTestData();
  }

  changeUnits(){
    this.isFahrenheit = !this.isFahrenheit;
  }

  getTestData() {
    this.testService.getTestData().subscribe({
      next: response => {
        if(response){
          this.weatherData = response;
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
