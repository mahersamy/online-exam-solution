
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { routes } from './app.routes';
import { environment } from './core/environment/environment';
import { tokenReducer } from './core/store/auth.reducer';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { API_BASE_URL } from 'auth-api';
import { API_BASE_URL_SUBJECTS } from 'subjects';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
    provideAnimations(),
    provideToastr(),
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
