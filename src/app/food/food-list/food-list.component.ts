import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  foods: Food[] = [];
  message!:string;
  
  constructor(
    private foodService: FoodService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getFoods()
  }

  getFoods() {
    this.foodService.getFoods().subscribe({
      next: (response) => {
        this.foods = response.data;
      },
      error: (err: any) => {
        this.message = err.error.message;
        console.log(err);
      }
    });
  }
}
