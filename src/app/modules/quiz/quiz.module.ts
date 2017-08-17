import {NgModule} from '@angular/core';
import {routing} from 'app/modules/quiz/quiz.routes';
import {MdRadioModule, MdCardModule, MdButtonModule, MdPaginatorModule, MdCheckboxModule} from '@angular/material';
import {UserResultsPageComponent} from './pages/user-results/user-results.page'
import {SharedModule} from 'app/shared/shared.module';
import {FormsModule} from "@angular/forms";
import {Ng2OrderModule} from 'ng2-order-pipe';
import {QuizService} from './quiz.service';
import {QuizSolveComponent} from "./pages/quiz-solve/quiz-solve.page";
import {PaginationComponent} from "./components/quiz-solve/pagination/pagination.component";
import {QuestionComponent} from "./components/quiz-solve/question/question.component";
import {ReviewComponent} from "./components/quiz-solve/review/review.component";
import {AnswersComponent} from "./components/quiz-solve/question/answers/answers.component";
import {AnswerComponent} from "./components/quiz-solve/question/answers/answer/answer.component";

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
    Ng2OrderModule
  ],
  declarations: [
    UserResultsPageComponent,
    QuizSolveComponent,
    PaginationComponent,
    QuestionComponent,
    ReviewComponent,
    AnswersComponent,
    AnswerComponent,
  ],
  providers: [
    QuizService
  ]
})
export class QuizModule {

}
