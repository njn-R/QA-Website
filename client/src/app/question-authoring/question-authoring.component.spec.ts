import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAuthoringComponent } from './question-authoring.component';

describe('QuestionAuthoringComponent', () => {
  let component: QuestionAuthoringComponent;
  let fixture: ComponentFixture<QuestionAuthoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionAuthoringComponent]
    });
    fixture = TestBed.createComponent(QuestionAuthoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
