import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  imports: [],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
  private readonly _router = inject(Router);
  private readonly _authApiService = inject(AuthApiService);
  private readonly destroy$ = new Subject<void>();

  logOut() {
    this._authApiService
      .logOut()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          localStorage.clear();
          this._router.navigate(['/auth/login']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
