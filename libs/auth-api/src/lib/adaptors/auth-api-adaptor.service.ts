import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { LoginResponse } from '../interfaces/loginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIAdaptorService implements Adaptor {
  adapt(data: any): LoginResponse {
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email,
    };
  }
}
