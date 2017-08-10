export class Answer {
    id: number;
    text: string;
    correct: boolean;
    selected: boolean;

    constructor(answer: any) {
        answer = answer || {};
        this.id = answer.id;
        this.text = answer.name;
        this.correct = answer.correct;
    }
}