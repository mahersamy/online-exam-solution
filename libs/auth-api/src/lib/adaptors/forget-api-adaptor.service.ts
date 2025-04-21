import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { ForgetPasswordResponse } from '../interfaces/forgetPasswordResponse';

@Injectable({
  providedIn: 'root',
})
export class ForgetApiAdaptorService implements Adaptor {
  adapt(data: any): ForgetPasswordResponse {
    return {
      message: data.message,
      info: data.info,
    };
  }
}
