import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectButtonComponent } from './subject-button.component';

describe('SubjectButtonComponent', () => {
  let component: SubjectButtonComponent;
  let fixture: ComponentFixture<SubjectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
