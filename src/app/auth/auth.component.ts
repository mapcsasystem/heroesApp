import { Component, inject } from '@angular/core';

@Component({
  selector: 'auth-root',
  template: ` <mat-toolbar color="primary"> Heroes App </mat-toolbar>
    <router-outlet></router-outlet>`,
})
export class AuthComponent {}
