import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { API_BASE_URL } from 'auth-api';
import { environment } from './core/environment/environment';
import { provideToastr } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { tokenReducer } from './core/store/auth.reducer';
import { API_BASE_URL_SUBJECTS } from 'subjects';
import { tokenInterceptor } from './core/interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
    provideAnimations(),
    provideToastr(),
    provideRouter(appRoutes),
    provideStore({
      token: tokenReducer,
    }),
    {
      provide: API_BASE_URL,
      useValue: environment.baseUrl,
    },
    {
      provide: API_BASE_URL_SUBJECTS,
      useValue: environment.baseUrl,
    },
  ],
};
