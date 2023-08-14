import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _router = inject(Router);
  private readonly _v = inject(ValidatorsService);
  form = this._fb.group({
    fullName: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.pattern(this._v.emailPattern)],
    ],
    password: ['', [Validators.required]],
    password1: ['', [Validators.required]],
  });

  eye1: boolean = false;
  eye2: boolean = false;

  summit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }

  goTo(): void {
    this._router.navigateByUrl('auth/login', { replaceUrl: true });
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.form.get(field);
  }
}
