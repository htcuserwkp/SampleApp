import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { HomeComponent } from './shared/home/home.component';
import { MathComponent } from './test/Math/try-math.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'weather', component: TestComponent},

  { path: 'math', component: MathComponent},

  {
    path: 'orders', loadChildren: () => import('./orders/order.module').then(mod => mod.OrderModule),
    data: { breadcrumb: {skip: true} }
  },

  { 
    path: 'customers', 
    component: CustomerListComponent,
    title: 'Customers'
  },

  { 
    path: 'customers/new', 
    component: CustomerDetailsComponent, 
    title: 'New Customer' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
