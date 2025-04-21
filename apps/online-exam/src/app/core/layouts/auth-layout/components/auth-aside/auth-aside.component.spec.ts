import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAsideComponent } from './auth-aside.component';

describe('AuthAsideComponent', () => {
  let component: AuthAsideComponent;
  let fixture: ComponentFixture<AuthAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAsideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
