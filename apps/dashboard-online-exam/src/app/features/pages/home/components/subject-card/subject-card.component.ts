import { Component, inject, Input, output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { SubjectApiService, SubjectResponse } from 'subjects';

@Component({
  selector: 'app-subject-card',
  imports: [],
  templateUrl: './subject-card.component.html',
  styleUrl: './subject-card.component.scss',
})
export class SubjectCardComponent {
  private readonly _router = inject(Router);
  private readonly _subjectApiService=inject(SubjectApiService);
  private readonly _toastrService = inject(ToastrService);
  private readonly destroy$ = new Subject<void>();

  @Input() subject!: SubjectResponse;

  onChange=output();


  toExams() {
    this._router.navigate(['home/exams/', this.subject._id]);
  }


  deleteSubject(){
    this._subjectApiService
          .deleteSubject(this.subject._id)
          .pipe(takeUntil(this.destroy$)).subscribe(
            {
              next:(res)=>{
                this._toastrService.success(res.message);
                this.onChangeHandler()

              },
              error:(error)=>{
                this._toastrService.error(error.error.message);

              }
            }
          )

  }

  onChangeHandler(){
    this.onChange.emit()
  }


}
