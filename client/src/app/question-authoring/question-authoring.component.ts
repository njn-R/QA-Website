import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-authoring',
  templateUrl: './question-authoring.component.html',
  styleUrls: ['./question-authoring.component.css'],
})
export class QuestionAuthoringComponent {
  constructor(private formBuilder: FormBuilder, private service: AuthService, private toastr: ToastrService) {}

  showModal = false;
  selectedAnswerType = '';
  categories = ['React', 'Angular', 'NodeJS', 'Javascript'];
  answerTypeArray = ['Text', 'MCQ', 'True/False', 'Checkbox'];

  questionForm = this.formBuilder.group({
    id: this.formBuilder.control('', [Validators.required]),
    category: this.formBuilder.control('', [Validators.required]),
    question: this.formBuilder.control('', [Validators.required]),
    answerType: this.formBuilder.control('', [Validators.required]),
    answer: this.formBuilder.control('', [Validators.required]),
  });

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onSubmit() {
    this.service.postQuestion(this.questionForm.value).subscribe((res) => {
      this.toastr.success('Question added successfully');
    });
    this.toggleModal();
  }
}
