import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { ExamResponse } from '../../shared/interfaces/exams/exam-response';

@Injectable({
  providedIn: 'root'
})
export class ExamApiAdaptorService implements Adaptor {
  adapt(data: any):ExamResponse[] {
    if(Array.isArray(data)){
      return data.map((item)=>this.transform(item))
    }
    return [this.transform(data)];

  }

  private transform(item: any):ExamResponse {
    return {
      _id: item._id,
      title: item.title,
      duration: item.duration,
      numberOfQuestions:item.numberOfQuestions,
      active:item.active,
    };
  }

}
