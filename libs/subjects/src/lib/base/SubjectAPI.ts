import { Observable } from "rxjs";

export abstract class SubjectsApi {
    abstract getAllSubjects():Observable<any>
    abstract deleteSubject(id:string):Observable<any>
    abstract updateSubject(id:string,data:any):Observable<any>
    abstract addSubject(data:any):Observable<any>
}