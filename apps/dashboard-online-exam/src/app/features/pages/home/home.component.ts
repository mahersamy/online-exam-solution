import { Component, inject,} from '@angular/core';

import { SubjectButtonComponent } from '../../../shared/ui/subject-button/subject-button.component';

import {SubjectApiService, SubjectResponse} from 'subjects';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { SubjectCardComponent } from "./components/subject-card/subject-card.component";

@Component({
  selector: 'app-home',
  imports: [SubjectButtonComponent, SubjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {
  private readonly _subjectApiService=inject(SubjectApiService);
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
