export class Answer {

  id: number;
  text: string;
  correct: boolean;
  selected: boolean;

  constructor(answer: any) {
    answer = answer || {};
    this.id = answer.id;
    this.text = answer.text;
    this.correct = answer.correct;
    this.selected = answer.selected;
  }
}
