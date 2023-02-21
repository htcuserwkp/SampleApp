import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HomeComponent } from 'src/app/shared/home/home.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class BaseModule { }
