import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          if (error.status === 400) {
            if (error.error.errors) {
              error.error.errors.forEach((value: string) => {
                this.toastr.error(value);
              });
            } else {
              this.toastr.error(error.error.message, error.status.toString())
            }
          }
          if (error.status === 401) {
            this.toastr.error(error.error.message, error.status.toString())
          }
          if (error.status === 404 && error.error.message === 'Not Found') {
            this.router.navigateByUrl('/not-found');
          }
          else if (error.status === 404){
            this.toastr.warning(error.error.message);
          }
          if (error.status === 500) {
            const navigationExtras: NavigationExtras = {state: {error: error.error}};
            this.router.navigateByUrl('/server-error', navigationExtras);
          }
        }
        return throwError(() => new Error(error.message))
      })
    )
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   return next.handle(request).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       switch (error.status) {
  //         case 400:
  //           return this.handleBadRequest(error);
  //         case 404:
  //           return this.handleNotFound(error);
  //         case 500:
  //           return this.handleServerError(error);
  //         default:
  //           return this.handleUnknownError(error);
  //       }
  //     })
  //   );
  // }

  // private handleBadRequest(error: HttpErrorResponse): Observable<HttpEvent<any>> {
  //   if (error.error.errors) {
  //     error.error.errors.forEach((value: string) => {
  //       this.toastr.error(value);
  //     });
  //   }
  //   else{
  //     const errorMessage : string = error.error.message || 'Bad Request';
  //     this.toastr.error(errorMessage);
  //   }

  //   throw error;
  // }

  // private handleNotFound(error: HttpErrorResponse): Observable<HttpEvent<any>> {
  //   let errorMessage: string = error.error.message || 'Not Found';

  //   this.toastr.error(errorMessage);
  //   this.router.navigateByUrl('/not-found');

  //   return throwError(() => error);
  // }

  // private handleServerError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
  //   const errorMessage = error.error.message || 'Internal Server Error';

  //   this.toastr.error(errorMessage);

  //   return throwError(() => error);
  // }

  // private handleUnknownError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
  //   this.toastr.error('An error occurred');

  //   return throwError(() => error);
  // }

}
