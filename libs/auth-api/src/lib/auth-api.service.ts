import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

import { AuthAPIAdaptorService } from './adaptors/auth-api-adaptor.service';
import { AuthApi } from './base/AuthAPI';
import { AuthEndPoint } from './enums/AuthAPI.endPoints';
import { LoginData } from './interfaces/loginData';
import { LoginResponse } from './interfaces/loginResponse';
import { RegisterResponse } from './interfaces/registerResponse';
import { RegisterData } from './interfaces/registerData';
import { API_BASE_URL } from './token/api-token';
import { ForgetPasswordData } from './interfaces/forgetPasswordData';
import { VerifyCodeData } from './interfaces/verifyCodeData';
import { ResetPasswordData } from './interfaces/resetPassowrdData';
import { ForgetPasswordResponse } from './interfaces/forgetPasswordResponse';
import { ForgetApiAdaptorService } from './adaptors/forget-api-adaptor.service';
import { VerifyCodeApiAdaptorService } from './adaptors/verify-code-api-adaptor.service';
import { ResetPasswordApiAdaptorService } from './adaptors/reset-password-api-adaptor.service';
import { VerfiyCodeResponse } from './interfaces/verfiyCodeResponse';
import { ResetPasswordResponse } from './interfaces/resetPasswordResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements AuthApi {
  private readonly _httpClient = inject(HttpClient);
  private readonly _Api_BASE = inject(API_BASE_URL);
  private readonly _authAPIAdaptorService = inject(AuthAPIAdaptorService);
  private readonly _forgetApiAdaptorService = inject(ForgetApiAdaptorService);
  private readonly _verifyCodeApiAdaptorService = inject(
    VerifyCodeApiAdaptorService
  );
  private readonly _resetPasswordApiAdaptorService = inject(
    ResetPasswordApiAdaptorService
  );

  login(data: LoginData): Observable<LoginResponse> {
    return this._httpClient
      .post(this._Api_BASE + AuthEndPoint.LOGIN, data)
      .pipe(
        map((res) => this._authAPIAdaptorService.adapt(res)),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  register(data: RegisterData): Observable<RegisterResponse> {
    return this._httpClient
      .post(this._Api_BASE + AuthEndPoint.REGISTER, data)
      .pipe(
        map((res) => this._authAPIAdaptorService.adapt(res)),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  forgetPassword(data: ForgetPasswordData): Observable<ForgetPasswordResponse> {
    return this._httpClient
      .post(this._Api_BASE + AuthEndPoint.FORGETPASSWORD, data)
      .pipe(
        map((res) => this._forgetApiAdaptorService.adapt(res)),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  verifyCode(data: VerifyCodeData): Observable<VerfiyCodeResponse> {
    return this._httpClient
      .post(this._Api_BASE + AuthEndPoint.VERIFYCODE, data)
      .pipe(
        map((res) => this._verifyCodeApiAdaptorService.adapt(res)),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  resetPassowrd(data: ResetPasswordData): Observable<ResetPasswordResponse> {
    return this._httpClient
      .put(this._Api_BASE + AuthEndPoint.RESETPASSWORD, data)
      .pipe(
        map((res) => this._resetPasswordApiAdaptorService.adapt(res)),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  logOut(): Observable<void> {
    return this._httpClient.get<void>(this._Api_BASE + AuthEndPoint.LOGOUT);
  }
}
