import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _http = inject(HttpClient);
  private readonly _router = inject(Router);
  login(): void {
    this._router.navigateByUrl('dashboard');
  }
  logout(): void {
    localStorage.clear();
    this._router.navigateByUrl('auth');
  }
}
