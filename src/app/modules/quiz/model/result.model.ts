import {ResultAnswer} from './result-answer.model';
import {Question} from "./question.model";

export class Result {

  resultAnswers: ResultAnswer[];
  questions: Question[];
  finished: boolean;
  score: number;

  constructor() {
  }
}
