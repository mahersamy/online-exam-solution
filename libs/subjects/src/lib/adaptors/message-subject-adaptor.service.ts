import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { SubjectMessage } from '../interfaces/message-subject-request';

@Injectable({
  providedIn: 'root'
})
export class MessageSubjectAdaptorService implements Adaptor {
  adapt(data: any) :SubjectMessage{
    return {
      message:data.message
    }
  }


}
