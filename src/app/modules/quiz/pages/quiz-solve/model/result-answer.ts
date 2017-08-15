import { Answer } from './answer';
import { Question } from './question';
export class ResultAnswer {
    id: number;
    question: Question
    answers: Answer[]

    constructor() {
    }
}