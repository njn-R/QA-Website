import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-authoring',
  templateUrl: './question-authoring.component.html',
  styleUrls: ['./question-authoring.component.css'],
})
export class QuestionAuthoringComponent {
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService
  ) {}

  showModal = false;
  selectedAnswerType = '';
  categories = ['React', 'Angular', 'NodeJS', 'Javascript'];
  answerTypeArray = ['Text', 'MCQ', 'True/False', 'Checkbox'];
  allQuestions: any;
  answerText: any;

  questionForm = this.formBuilder.group({
    id: this.formBuilder.control('', [Validators.required]),
    category: this.formBuilder.control('', [Validators.required]),
    question: this.formBuilder.control('', [Validators.required]),
    answerType: this.formBuilder.control('', [Validators.required]),
    answer: this.formBuilder.control(''),
    multipleAnswers: this.formBuilder.array([
      this.formBuilder.group({
        radio: ["false"],
        text: [''],
      }),
    ]),
  });

  get answersArray(): FormArray {
    return this.questionForm.get('multipleAnswers') as FormArray;
  }
  addAnswer() {
    this.answersArray.push(
      this.formBuilder.group({
        radio: ["false"],
        text: [''],
      })
    );
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onSubmit() {
    this.service.postQuestion(this.questionForm.value).subscribe((res) => {
      this.toastr.success('Question added successfully');
    });
    setTimeout(() => {
      location.reload();
    }, 1000);
    this.toggleModal();
  }

  getQuestions() {
    this.service.getAllQuestions().subscribe((res) => {
      this.allQuestions = res;
    });
  }

  ngOnInit() {
    this.getQuestions();
  }
}
