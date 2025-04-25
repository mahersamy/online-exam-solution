import { Component, inject, Input, output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { single, Subject, takeUntil } from 'rxjs';
import { SubjectApiService, SubjectResponse } from 'subjects';
import { CustomModalComponent } from "../../../../../shared/ui/custom-modal/custom-modal.component";
import { SubjectModalComponent } from "../subject-modal/subject-modal.component";

@Component({
  selector: 'app-subject-card',
  imports: [CustomModalComponent, SubjectModalComponent],
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

  UpdateDialog: boolean = false;

  closeUpdateDialog(){
    this.UpdateDialog=false;
    this.onChangeHandler()
  }

  showUpdateDialog(){
    this.UpdateDialog=true;
  }


  toExams() {
    this._router.navigate(['home/exams/', this.subject._id]);
  }

  onChangeHandler(){
    this.onChange.emit()
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

 


}
