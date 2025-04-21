import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { ResetPasswordResponse } from '../interfaces/resetPasswordResponse';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordApiAdaptorService implements Adaptor {
  adapt(data: any): ResetPasswordResponse {
    return {
      message: data.message,
      token: data.token,
    };
  }
}
