import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    id: number;
    title: string;
    description: string;
    config: QuizConfig;
    questions: Question[];

    constructor(quiz: any) {
        if (quiz) {
            this.id = quiz.id;
            this.title = quiz.title;
            this.description = quiz.description;
            this.questions = [];
            quiz.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }

    public setQuizConfig(config: QuizConfig) {
        this.config = config;
    }
}  