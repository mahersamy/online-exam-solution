import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autoLoginGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  if (typeof window !== 'undefined' && localStorage.getItem('token')) {
    _router.navigate(['/home']);
    return false;
  }
  return true;
};
