import { inject, Injectable } from '@angular/core';
import { QuizApiAdaptorService } from '../../../core/adaptors/quiz-api-adaptor.service';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'auth-api';
import { QuizAPI } from '../../../core/base/quiz/quiz-api';
import { catchError, map, Observable, throwError } from 'rxjs';
import { QuizResponse } from '../../interfaces/quiz/quiz-response';
import { EndPoints } from '../../../core/enums/onlineAPI.endPoints';

@Injectable({
  providedIn: 'root',
})
export class QuizService implements QuizAPI {
  private readonly _httpClient = inject(HttpClient);
  private readonly _Api_BASE = inject(API_BASE_URL);
  private readonly _quizApiAdaptorService = inject(QuizApiAdaptorService);

  getAllQuizOnExams(id: string): Observable<Array<QuizResponse>> {
    return this._httpClient
      .get(this._Api_BASE + EndPoints.Quiz + '?exam=' + id)
      .pipe(
        map((res: any) => this._quizApiAdaptorService.adapt(res.questions)),
        catchError((error) => throwError(() => error))
      );
  }
}
