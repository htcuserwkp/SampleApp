import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
