import { Observable } from "rxjs";

export abstract class SubjectsApi {
    abstract getAllSubjects():Observable<any>
}