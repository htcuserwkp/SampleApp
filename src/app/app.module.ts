import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './orders/order.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './common/interceptors/loading.interceptor';
import { CommonModule } from '@angular/common';
import { BaseModule } from './common/modules/base.module';

@NgModule({
  declarations: [
    AppComponent
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
