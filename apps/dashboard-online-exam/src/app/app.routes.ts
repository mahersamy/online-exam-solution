import { Route } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';

export const appRoutes: Route[] = [
    {
        path:"auth",
        component:AuthLayoutComponent,
        children:[
            { path: '', redirectTo: 'register', pathMatch: 'full' },
            {
              path: 'login',
              loadComponent: () =>
                import('./core/pages/login/login.component').then(
                  (c) => c.LoginComponent
                ),
            },
            {
              path: 'register',
              loadComponent: () =>
                import('./core/pages/register/register.component').then(
                  (c) => c.RegisterComponent
                ),
            },
            {
              path: 'forget-password',
              loadComponent: () =>
                import('./core/pages/forget-password/forget-password.component').then(
                  (c) => c.ForgetPasswordComponent
                ),
            },
          ],
    },
    {
      path:'',
      redirectTo:'auth',
      pathMatch: 'full'

    }
];
