import { inject, Injectable } from '@angular/core';
import { ExamAPI } from '../../../core/base/exam/exam-api';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'auth-api';
import { EndPoints } from '../../../core/enums/onlineAPI.endPoints';
import { ExamApiAdaptorService } from '../../../core/adaptors/exam-api-adaptor.service';
import { ExamResponse } from '../../interfaces/exams/exam-response';

@Injectable({
  providedIn: 'root',
})
export class ExamService implements ExamAPI {
  private readonly _httpClient = inject(HttpClient);
  private readonly _Api_BASE = inject(API_BASE_URL);
  private readonly _examApiAdaptorService = inject(ExamApiAdaptorService);

  getAllExamsOnSubject(id: string): Observable<Array<ExamResponse>> {
    return this._httpClient
      .get(this._Api_BASE + EndPoints.Exams + '?subject=' + id)
      .pipe(
        map((res: any) => this._examApiAdaptorService.adapt(res.exams)),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
