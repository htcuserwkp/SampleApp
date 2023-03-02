import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';
import { FoodRoutingModule } from './food-routing.module';



@NgModule({
  declarations: [
    FoodListComponent,
    FoodComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
