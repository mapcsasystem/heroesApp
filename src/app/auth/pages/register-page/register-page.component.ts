import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _router = inject(Router);
  goTo(): void {
    this._router.navigateByUrl('auth/login', { replaceUrl: true });
  }
}
