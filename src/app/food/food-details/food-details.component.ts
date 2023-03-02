import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  food = new Food();

  constructor(
    private foodService: FoodService, 
    private toastr: ToastrService,
    private route: ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
      this.getFood();
    }
  
    getFood(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.foodService.getFood(id).subscribe({
        next: (response) => {
          this.food = response.data;
        },
        error: (err: any) => {console.log(err)}
      });
      // this.foodService.getFood(id)
      //   .subscribe(food => this.food = food);
    }
  
    // deleteFood(id: number): void {
    //   this.foodService.deleteFood(id)
    //     .subscribe(() => this.router.navigateByUrl('/foods'));
    // }

    deleteFood(id: number) {
      this.foodService.deleteFood(id).subscribe({
        next: (response) => {
          this.toastr.success(response.message);
          this.router.navigateByUrl('/foods');
        },
        error: (err: any) => {console.log(err)}
      });
    }
}