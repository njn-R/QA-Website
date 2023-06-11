import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-authoring',
  templateUrl: './question-authoring.component.html',
  styleUrls: ['./question-authoring.component.css'],
})
export class QuestionAuthoringComponent {
  constructor(private formBuilder: FormBuilder) {}

  showModal = false;
  questionForm: FormGroup = new FormGroup({});
  selectedAnswerType = 'textbox';

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      answer: [''], // Set up form control for 'answer'
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
