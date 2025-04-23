import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { QuizResponse } from '../../shared/interfaces/quiz/quiz-response';

@Injectable({
  providedIn: 'root'
})
export class QuizApiAdaptorService implements Adaptor {
  adapt(data: any):QuizResponse[]{
    if(Array.isArray(data)){
      return data.map((item)=>this.transform(item))
    }
    return [this.transform(data)];
  }



  private transform(item:any){
    return{
      answers: item.answers?.map((ans: any) => ({
        key: ans.key,
        answer: ans.answer
      })),
      _id:item._id,
      type:item.type,
      question:item.question,
      correct:item.correct,
      exam:{
        title:item.exam.title,
        duration:item.exam.duration,
        numberOfQuestions:item.exam.numberOfQuestions,
      }

    }
  }


}
