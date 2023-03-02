import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';



@NgModule({
  declarations: [
    FoodListComponent,
    FoodComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoodModule { }
