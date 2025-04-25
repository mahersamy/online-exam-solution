import { inject, Injectable } from '@angular/core';
import { SubjectsApi } from '../base/SubjectAPI';
import { SubjectApiAdaptorService } from '../adaptors/subject-api-adaptor.service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { SubjectResponse } from '../interfaces/subject-response';
import { EndPoints } from '../enums/onlineAPI.endPoints';
import { API_BASE_URL_SUBJECTS } from '../token/api-token'
import { SubjectMessage } from '../interfaces/message-subject-request';
import { MessageSubjectAdaptorService } from '../adaptors/message-subject-adaptor.service';
import { SubjectData } from '../interfaces/ubdate-subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectApiService implements SubjectsApi {
  
  private readonly _httpClient = inject(HttpClient);
  private readonly _Api_BASE_SUBJECTS = inject(API_BASE_URL_SUBJECTS);
  private readonly _subjectApiAdaptorService = inject(SubjectApiAdaptorService);
  private readonly _subjectApiMessageAdaptorService = inject(MessageSubjectAdaptorService);

  getAllSubjects(isLimit: boolean = true ,numOfLimit:number=6): Observable<Array<SubjectResponse>> {
    let finalUrl: string = this._Api_BASE_SUBJECTS + EndPoints.SUBJECTS;
    if (isLimit) {
      finalUrl = this._Api_BASE_SUBJECTS + EndPoints.SUBJECTS + '?limit='+numOfLimit;
    }

    return this._httpClient
      .get(finalUrl)
      .pipe(
        map(
          (res: any) => this._subjectApiAdaptorService.adapt(res.subjects),
          catchError((error) => {
            return throwError(() => error);
          })
        )
      );
  }


  deleteSubject(id:string): Observable<SubjectMessage> {
    let finalUrl: string = this._Api_BASE_SUBJECTS + EndPoints.SUBJECTS+'/'+id;
    return this._httpClient.delete(finalUrl).pipe(map(
      (res)=>this._subjectApiMessageAdaptorService.adapt(res),
      catchError((error) => {
        return throwError(() => error);
      })
    ))
  }
  
  updateSubject(id:string,data:SubjectData): Observable<SubjectMessage> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('icon', data.icon);
    let finalUrl: string = this._Api_BASE_SUBJECTS + EndPoints.SUBJECTS+'/'+id;
    return this._httpClient.put(finalUrl,formData).pipe(map(
      (res)=>this._subjectApiMessageAdaptorService.adapt(res),
      catchError((error) => {
        return throwError(() => error);
      })
    ))
  }

  addSubject(data:SubjectData): Observable<SubjectMessage> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('icon', data.icon);
    let finalUrl: string = this._Api_BASE_SUBJECTS + EndPoints.SUBJECTS;
    return this._httpClient.post(finalUrl,formData).pipe(map(
      (res)=>this._subjectApiMessageAdaptorService.adapt(res),
      catchError((error) => {
        return throwError(() => error);
      })
    ))
  }



  

}
