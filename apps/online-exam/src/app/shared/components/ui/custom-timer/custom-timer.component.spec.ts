import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimerComponent } from './custom-timer.component';

describe('CustomTimerComponent', () => {
  let component: CustomTimerComponent;
  let fixture: ComponentFixture<CustomTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
