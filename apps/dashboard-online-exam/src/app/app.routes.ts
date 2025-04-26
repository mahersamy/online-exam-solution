import { Route } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { autoLoginGuard } from './core/guards/auto-login.guard';
import { authGuard } from './core/guards/auth.guard';


export const appRoutes: Route[] = [
    {
        path:"auth",
        canActivate: [autoLoginGuard],
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
    },
    {
      path: 'home',
      component: MainLayoutComponent,
      canActivate: [authGuard],
      children: [
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full',
        },
        {
          path: 'dashboard',
          loadComponent: () =>
            import('./features/pages/home/home.component').then(
              (c) => c.HomeComponent
            ),
        },
        // {
        //   path: 'exams/:id',
        //   loadComponent: () =>
        //     import('./features/pages/exams/exams.component').then(
        //       (c) => c.ExamsComponent
        //     ),
        // },
        // {
        //   path: 'quiz-history',
        //   loadComponent: () =>
        //     import('./features/pages/quiz-history/quiz-history.component').then(
        //       (c) => c.QuizHistoryComponent
        //     ),
        // },
      ],
    },

    
];
