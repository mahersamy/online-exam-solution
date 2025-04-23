import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subject-button',
  imports: [],
  templateUrl: './subject-button.component.html',
  styleUrl: './subject-button.component.scss'
})
export class SubjectButtonComponent {
  loading=input<boolean>()
  viewAll=input<boolean>()
  responsive=input<boolean>()
  @Output() functionCalled = new EventEmitter<void>();



  handelClick():void{
    this.functionCalled.emit()
  }

}
