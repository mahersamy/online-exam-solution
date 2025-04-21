import { Component, inject, Input } from '@angular/core';
import { SubjectResponse } from '../../../../../shared/interfaces/subjects/subject-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  imports: [],
  templateUrl: './subject-card.component.html',
  styleUrl: './subject-card.component.scss',
})
export class SubjectCardComponent {
  private readonly _router = inject(Router);

  @Input() subject!: SubjectResponse;

  toExams() {
    this._router.navigate(['home/exams/', this.subject._id]);
  }
}
