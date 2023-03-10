import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {
    path: '', 
    component: FoodListComponent, 
    title: 'Foods'
  },
  { 
    path: 'new', 
    component: FoodComponent, 
    title: 'New Food' 
  },
  { 
    path: 'update/:id', 
    component: FoodComponent, 
    title: 'Update Food' 
  },
  { 
    path: ':id', 
    component: FoodDetailsComponent, 
    title: 'Food Details' 
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
