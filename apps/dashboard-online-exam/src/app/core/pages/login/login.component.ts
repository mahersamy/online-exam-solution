import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthApiService } from 'auth-api';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { Store } from '@ngrx/store';
import { setToken } from '../../store/auth.actions';
import { AuthButtonComponent } from '../../../shared/ui/auth-button/auth-button.component';


@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule, RouterLink,AuthButtonComponent,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _authApiService = inject(AuthApiService);
  private readonly _toastrService = inject(ToastrService);
  private readonly _store = inject(Store<string>);
  private readonly _router = inject(Router);

  private readonly destroy$ = new Subject<void>();

  loginForm!: FormGroup;
  loading: boolean = false;

  ngOnInit(): void {
    this.formInit();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  formInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        ),
      ]),
    });
  }

  submit(fn: () => void) {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      fn.call(this);
    }
  }

  login(): void {
    this.loading = true;
    this._authApiService
      .login(this.loginForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading = false;
          localStorage.setItem('token', res.token);
          this._store.dispatch(setToken({ user: jwtDecode(res.token) }));
          console.log("home")
          this._router.navigate(['/home']);
        },
        error: (error) => {
          this._toastrService.error(error.error.message);
          this.loading = false;
        },
      });
  }
}
