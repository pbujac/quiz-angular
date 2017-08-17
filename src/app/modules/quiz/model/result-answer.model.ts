import {Answer} from './answer.model';
import {Question} from './question.model';

export class ResultAnswer {
  id: number;
  question: Question;
  answers: Answer[];

  constructor() {
  }
}
