import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MathComponent } from './test/Math/try-math.component';
import { FoodComponent } from './food/food-details/food.component';
import { OrderModule } from './orders/order.module';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './common/interceptors/loading.interceptor';
import { CustomerComponent } from './customers/customer/customer.component';
import { CommonModule } from '@angular/common';
import { BaseModule } from './common/modules/base.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MathComponent,
    FoodComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
