import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  if (typeof window !== 'undefined' && localStorage.getItem('token')) {
    return true;
  }
  _router.navigate(['/auth']);
  return false;
};
