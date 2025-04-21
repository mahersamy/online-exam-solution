import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { VerfiyCodeResponse } from '../interfaces/verfiyCodeResponse';

@Injectable({
  providedIn: 'root',
})
export class VerifyCodeApiAdaptorService implements Adaptor {
  adapt(data: any): VerfiyCodeResponse {
    return {
      status: data.status,
    };
  }
}
