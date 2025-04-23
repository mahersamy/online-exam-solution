import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { API_BASE_URL } from 'auth-api';
import { environment } from './core/environment/environment';
import { provideToastr } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { tokenReducer } from './core/store/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
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
  ],
};
