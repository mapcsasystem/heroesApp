import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _router = inject(Router);
  private readonly _v = inject(ValidatorsService);
  form = this._fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern(this._v.emailPattern)],
    ],
    password: ['', [Validators.required]],
  });

  eye: boolean = false;

  // constructor(
  //   private readonly _fb: FormBuilder,
  //   private readonly _router: Router
  // ) {}

  summit(): void {
    console.log(this.form.value);
  }

  goTo(): void {
    this._router.navigateByUrl('auth/register', { replaceUrl: true });
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.form.get(field);
  }
}
