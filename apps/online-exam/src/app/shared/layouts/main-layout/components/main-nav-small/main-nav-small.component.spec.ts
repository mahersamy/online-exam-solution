import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavSmallComponent } from './main-nav-small.component';

describe('MainNavSmallComponent', () => {
  let component: MainNavSmallComponent;
  let fixture: ComponentFixture<MainNavSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNavSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
