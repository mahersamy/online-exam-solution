import { Subject, takeUntil } from 'rxjs';
import { Component, inject, input, OnInit, output } from '@angular/core';
import { CustomModalComponent } from '../../../../../shared/ui/custom-modal/custom-modal.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubjectApiService } from 'subjects';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject-modal',
  imports: [CustomModalComponent, ReactiveFormsModule],
  templateUrl: './subject-modal.component.html',
  styleUrl: './subject-modal.component.scss',
})
export class SubjectModalComponent implements OnInit {
  private readonly _subjectApiService = inject(SubjectApiService);
  private readonly _toastrService = inject(ToastrService);
  private readonly destroy$ = new Subject<void>();

  isModalOpen = input.required<boolean>();
  close=output();
  subjectId=input<string>();

  subjectForm!: FormGroup;
  fileSelected!: File | null;

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.subjectForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    });
  }

  onchange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileSelected = input.files[0];
    } else {
      this.fileSelected = null;
    }
  }


  closeHandler(){
    this.close.emit()
  }

  submit() {
    if (this.subjectForm.invalid) {
      this.subjectForm.markAllAsTouched();
    } else if (this.fileSelected == null) {
      this._toastrService.error('plese set valid image');
    } else {
      if(this.subjectId()==undefined){
        this.addSubject()
        
      }else{
        this.updateSubject()
      }
      
    }
  }

  addSubject(): void {
    const nameControl = this.subjectForm.get('name');
    this._subjectApiService
      .addSubject({
        name: nameControl?.value,
        icon: this.fileSelected!,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next:()=>this.closeHandler(),
        error: (err) => {
          this._toastrService.error(err.error);
        },
      });
  }

  updateSubject(): void {
    const nameControl = this.subjectForm.get('name');
    this._subjectApiService
      .updateSubject(
        this.subjectId()!
        ,
        {
        name: nameControl?.value,
        icon: this.fileSelected!,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next:()=>this.closeHandler(),
        error: (err) => {
          this._toastrService.error(err.error);
        },
      });
  }
}
