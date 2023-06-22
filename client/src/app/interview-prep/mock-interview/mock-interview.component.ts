import { Component } from '@angular/core';

@Component({
  selector: 'app-mock-interview',
  templateUrl: './mock-interview.component.html',
  styleUrls: ['./mock-interview.component.css'],
})
export class MockInterviewComponent {
  idx: number = 0;
  selectedAnswer: string = '';
  correctAnswers: number = 0;
  wrongAnswers: number = 0;
  count: number = 3;
  questions: any[] = [
    {
      question:
        'Which lifecycle method is used to perform cleanup and unsubscribe when a component is unmounted in React?',
      answers: [
        { id: 'a', text: 'componentWillUnmount' },
        { id: 'b', text: 'componentDidUnmount' },
        { id: 'c', text: 'componentWillUnmounted' },
        { id: 'd', text: 'componentDidUpdate' },
      ],
      correctAnswer: 'a',
    },
    {
      question: 'When did Facebook launch?',
      answers: [
        { id: 'a', text: '2005' },
        { id: 'b', text: '2008' },
        { id: 'c', text: '2003' },
        { id: 'd', text: '2004' },
      ],
      correctAnswer: 'd',
    },
    {
      question:
        'In React, props are used to pass data from a parent component to a child component.',
      answers: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
      ],
      correctAnswer: 'a',
    },
  ];

  answered(e: any) {
    this.selectedAnswer = e.target.value;

    if (this.selectedAnswer === this.questions[this.idx].correctAnswer) {
      this.correctAnswers++;
    } else {
      this.wrongAnswers++;
    }
  }

  nextQuestion() {
    this.idx++;
    this.selectedAnswer = '';
    document.querySelectorAll('input').forEach((el) => (el.checked = false));
  }

  showResults() {
    this.idx = -1;
  }

  resetQuestions() {
    this.idx = 0;
    this.selectedAnswer = '';
    this.correctAnswers = 0;
    this.wrongAnswers = 0;
  }
}
