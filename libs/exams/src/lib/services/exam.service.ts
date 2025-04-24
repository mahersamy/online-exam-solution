import { inject, Injectable } from '@angular/core';
import { ExamAPI } from '../base/exam-api';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL_EXAMS } from '../token/api-token';
import { EndPoints } from '../enums/onlineAPI.endPoints';
import { ExamApiAdaptorService } from '../adaptors/exam-api-adaptor.service';
import { ExamResponse } from '../interfaces/exam-response';

@Injectable({
  providedIn: 'root',
})
export class ExamService implements ExamAPI {
  private readonly _httpClient = inject(HttpClient);
  private readonly _API_BASE_URL_EXAMS = inject(API_BASE_URL_EXAMS);
  private readonly _examApiAdaptorService = inject(ExamApiAdaptorService);

  getAllExamsOnSubject(id: string): Observable<Array<ExamResponse>> {
    let finalUrl: string = this._API_BASE_URL_EXAMS + EndPoints.Exams + '?subject=' + id;
    return this._httpClient
      .get(finalUrl)
      .pipe(
        map((res: any) => this._examApiAdaptorService.adapt(res.exams)),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
