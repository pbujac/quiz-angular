import {NgModule} from '@angular/core';
import {routing} from 'app/modules/quiz/quiz.routes';
import {MdRadioModule, MdCardModule, MdButtonModule, MdPaginatorModule, MdCheckboxModule} from '@angular/material';
import {UserResultsPageComponent} from './pages/user-results/user-results.page'
import {SharedModule} from 'app/shared/shared.module';
import {FormsModule} from "@angular/forms";
import {Ng2OrderModule} from 'ng2-order-pipe';
import {QuizService} from './quiz.service';
import {ReviewComponent} from "./components/quiz-solve/review/review.component";
import {AnswersComponent} from "./components/quiz-solve/question/answers/answers.component";
import {AnswerComponent} from "./components/quiz-solve/question/answers/answer/answer.component";
import {SubmitComponent} from "./components/quiz-solve/submit/submit.component";
import {PaginationComponent} from "./components/quiz-solve/pagination/pagination.component";
import {QuestionComponent} from "./components/quiz-solve/question/question.component";
import {ProgressComponent} from "./components/quiz-solve/progress/progress.component";
import {QuizSolveComponent} from "./pages/quiz-solve/quiz-solve.page";
import {CancelComponent} from "./components/quiz-solve/cancel/cancel.component";
import {ResultComponent} from "./components/quiz-solve/result/result.component";
import {ResultQuestionComponent} from "./components/quiz-solve/result/result-question/result-answers/result-question/result-question.component";
import {ResultAnswersComponent} from "./components/quiz-solve/result/result-question/result-answers/result-answers.component";
import {ResultAnswerComponent} from "./components/quiz-solve/result/result-question/result-answers/result-answer/result-answer.component";

@NgModule({
  imports: [
    SharedModule,
    routing,
    FormsModule,
    MdRadioModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdPaginatorModule,
    Ng2OrderModule,
  ],
  declarations: [
    UserResultsPageComponent,
    QuizSolveComponent,
    PaginationComponent,
    QuestionComponent,
    ReviewComponent,
    AnswersComponent,
    AnswerComponent,
    ProgressComponent,
    SubmitComponent,
    CancelComponent,
    ResultComponent,
    ResultQuestionComponent,
    ResultAnswersComponent,
    ResultAnswerComponent
  ],
  providers: [
    QuizService
  ]
})
export class QuizModule {

}
