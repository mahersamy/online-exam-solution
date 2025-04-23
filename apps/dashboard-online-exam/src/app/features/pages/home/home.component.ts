import { Component, inject,} from '@angular/core';

import { SubjectButtonComponent } from '../../../shared/ui/subject-button/subject-button.component';

import {SubjectApiService} from 'subjects';

@Component({
  selector: 'app-home',
  imports: [SubjectButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {
  private readonly _subjectApiService=inject(SubjectApiService);


 
}
