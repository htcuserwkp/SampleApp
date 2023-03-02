import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    title: 'Sample App'
  },

  {
    path: 'orders', loadChildren: () => import('./orders/order.module').then(mod => mod.OrderModule),
    data: { breadcrumb: {skip: true} }
  },
  {
    path: 'customers', loadChildren: () => import('./customers/customer.module').then(mod => mod.CustomerModule),
    data: { breadcrumb: {skip: true} }
  },
  {
    path: 'foods', loadChildren: () => import('./food/food.module').then(mod => mod.FoodModule),
    data: { breadcrumb: {skip: true} }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
