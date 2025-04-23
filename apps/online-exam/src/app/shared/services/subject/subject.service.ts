import { inject, Injectable } from '@angular/core';
import { SubjectsApi } from '../../../core/base/subject/SubjectAPI';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'auth-api';

import { SubjectResponse } from '../../interfaces/subjects/subject-response';
import { EndPoints } from '../../../core/enums/onlineAPI.endPoints';
import { SubjectApiAdaptorService } from '../../../core/adaptors/subject-api-adaptor.service';

@Injectable({
  providedIn: 'root',
})
export class SubjectService implements SubjectsApi {
  private readonly _httpClient = inject(HttpClient);
  private readonly _Api_BASE = inject(API_BASE_URL);
  private readonly _subjectApiAdaptorService = inject(SubjectApiAdaptorService);

  getAllSubjects(isLimit: boolean = true ,numOfLimit:number=6): Observable<Array<SubjectResponse>> {
    let finalUrl: string = this._Api_BASE + EndPoints.SUBJECTS;
    if (isLimit) {
      finalUrl = this._Api_BASE + EndPoints.SUBJECTS + '?limit='+numOfLimit;
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
}
