import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { SocialButtonsComponent } from '../../layouts/auth-layout/components/social-buttons/social-buttons.component';
import { AuthButtonComponent } from '../../../shared/components/ui/auth-button/auth-button.component';

@Component({
  selector: 'app-forget-password',
  imports: [
    SocialButtonsComponent,
    ReactiveFormsModule,
    RouterLink,
    AuthButtonComponent,
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  private readonly _authApiService = inject(AuthApiService);
  private readonly _toastrService = inject(ToastrService);
  private readonly _router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  forgetForm!: FormGroup;
  setPasswordForm!: FormGroup;
  verifyForm!: FormGroup;

  sendCodeStep: boolean = true;
  verifyCodeStep: boolean = false;
  setPasswordStep: boolean = false;
  loading: boolean = false;

  ngOnInit(): void {
    this.formInit();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  formInit() {
    this.forgetForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.setPasswordForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.email]),
        newPassword: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ]),
      },
      { validators: [this.validateRePassword] }
    );

    this.verifyForm = new FormGroup({
      resetCode: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  // Generic submit
  submit(form: FormGroup, fn: () => void) {
    if (form.invalid) {
      form.markAllAsTouched();
    } else {
      fn.call(this);
    }
  }

  sendCode(nextStep: boolean = true) {
    this.loading = true;
    this._authApiService
      .forgetPassword(this.forgetForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (nextStep == true) {
            this.sendCodeStep = !this.sendCodeStep;
            this.verifyCodeStep = true;
          }
          this.loading = false;
        },
        error: (error) => {
          this._toastrService.error(error.error.message);
          this.loading = false;
        },
      });
  }

  verifyCode() {
    this.loading = true;
    this._authApiService
      .verifyCode(this.verifyForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.verifyCodeStep = !this.verifyCodeStep;
          this.setPasswordStep = true;
          this.loading = false;
        },
        error: (error) => {
          this._toastrService.error(error.error.message);
          this.loading = false;
        },
      });
  }

  setPassword() {
    this.loading = true;
    this.setPasswordForm
      .get('email')
      ?.setValue(this.forgetForm.get('email')?.value);
    this._authApiService
      .resetPassowrd(this.setPasswordForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading = false;
          this._router.navigate(['/auth/login']);
        },
        error: (error) => {
          this._toastrService.error(error.error.message);
          this.loading = false;
        },
      });
  }

  validateRePassword(form: AbstractControl) {
    const password = form.get('password')?.value;
    const rePassword = form.get('confirmPassword')?.value;
    if (password === rePassword) {
      return null;
    } else {
      return { misMatch: true };
    }
  }
}
