import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';
import { FoodRoutingModule } from './food-routing.module';
import { FoodDetailsComponent } from './food-details/food-details.component';



@NgModule({
  declarations: [
    FoodListComponent,
    FoodComponent,
    FoodDetailsComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
