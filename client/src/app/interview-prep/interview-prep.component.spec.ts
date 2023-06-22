import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPrepComponent } from './interview-prep.component';

describe('InterviewPrepComponent', () => {
  let component: InterviewPrepComponent;
  let fixture: ComponentFixture<InterviewPrepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewPrepComponent]
    });
    fixture = TestBed.createComponent(InterviewPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
