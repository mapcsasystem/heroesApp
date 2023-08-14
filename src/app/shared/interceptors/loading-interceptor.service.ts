import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptorService implements HttpInterceptor {
  private readonly _loadingService = inject(LoadingService);
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loadingService.loading$.next(true);
    return next.handle(req).pipe(
      delay(500),
      finalize(() => {
        this._loadingService.loading$.next(false);
      })
    );
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
  // }
}
