import { Component, inject, OnInit } from '@angular/core';
import { SubjectCardComponent } from './components/subject-card/subject-card.component';
import { SubjectApiService, SubjectResponse } from 'subjects';
import { ToastrService } from 'ngx-toastr';
import { SubjectButtonComponent } from '../../../shared/components/ui/subject-button/subject-button.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [SubjectCardComponent, SubjectButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _subjectApiService = inject(SubjectApiService);
  private readonly _toastrService = inject(ToastrService);
  private readonly destroy$ = new Subject<void>();

  subjects!: Array<SubjectResponse>;
  viewAll: boolean = false;
  loading = false;

  ngOnInit(): void {
    this.getAllSubjects();
  }

  getAllSubjects() {
    this.viewAll = !this.viewAll;
    this.loading = true;
    this._subjectApiService
      .getAllSubjects(this.viewAll)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.subjects = res;
          this.loading = false;
        },
        error: (error) => {
          this._toastrService.error(error.error.message);
          this.loading = false;
        },
      });
  }
}
