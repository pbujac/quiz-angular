import {Answer} from './answer.model';

export class Question {

  id: number;
  text: string;
  answers: Answer[];
  answered: boolean;

  constructor(question: any) {
    question = question || {};
    this.id = question.id;
    this.text = question.text;
    this.answered = false;
    this.answers = [];
    question.answers.forEach(a => {
      this.answers.push(new Answer(a));
    });
  }
}
