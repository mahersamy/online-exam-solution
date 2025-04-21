import { Observable } from 'rxjs';

export abstract class AuthApi {
  abstract login(data: any): Observable<any>;

  abstract register(data: any): Observable<any>;

  abstract forgetPassword(data: any): Observable<any>;
  abstract verifyCode(data: any): Observable<any>;
  abstract resetPassowrd(data: any): Observable<any>;

  abstract logOut(): Observable<any>;
}
