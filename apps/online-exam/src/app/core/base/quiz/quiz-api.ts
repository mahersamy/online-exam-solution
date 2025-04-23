import { Observable } from "rxjs";

export abstract class QuizAPI {
   abstract getAllQuizOnExams(id:string):Observable<any>;
}