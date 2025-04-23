import { Observable } from "rxjs";

export abstract class ExamAPI{
    abstract getAllExamsOnSubject(id:string):Observable<any>
}
