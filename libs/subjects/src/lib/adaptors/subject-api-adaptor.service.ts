import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Adaptor } from '../interfaces/adaptor';
import { SubjectResponse } from '../interfaces/subject-response';

@Injectable({
  providedIn: 'root'
})
export class SubjectApiAdaptorService implements Adaptor{

  adapt(data: any): SubjectResponse[] {
    if (Array.isArray(data)) {
      return data.map(item => this.transform(item));
    }
    return [this.transform(data)];
  }

  private transform(item: any) {
    return {
      _id: item._id,
      name: item.name,
      icon: item.icon,
      createdAt: item.createdAt
    };
  }

  
}
