import {NgModule} from '@angular/core';
import {routing} from 'app/modules/quiz/quiz.routes';
import {
  MdRadioModule,
  MdCardModule,
  MdButtonModule,
  MdPaginatorModule,
  MdCheckboxModule,
  MdSelectModule,
  MdDialogModule
} from '@angular/material';
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
import {ResultQuestionComponent} from "./components/quiz-solve/result/result-question/result-answers/result-question/result-question.component";
import {ResultAnswersComponent} from "./components/quiz-solve/result/result-question/result-answers/result-answers.component";
import {ResultAnswerComponent} from "./components/quiz-solve/result/result-question/result-answers/result-answer/result-answer.component";
import {ResultComponent} from "./pages/user-results/result/result.component";
import {FinalResultComponent} from "./components/quiz-solve/result/result.component";
import {QuizCategoriesPageComponent} from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
import {QuizListByCategoriesPageComponent} from "app/modules/quiz/pages/quiz-list/by-category/quiz-list-by-categories.page";
import {QuizModal} from "./modals/modal-quiz/modal-quiz.component";
import {QuizCategoryComponent} from "./components/quiz-category/quiz-category.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {QuizCategorySelectorComponent} from "./components/category-selector/quiz-category-selector";
import {ResultModal} from "./modals/modal-result/modal-result.component";
import {QuizzesPageComponent} from "./pages/quiz-list/all-quizzes/quizzes.page";
import {QuizDialogComponent} from "./modals/modal-quizzes/modal-quizzes.component";
import {QuizzesComponent} from "./components/quizzes/quizzes.component";

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
    MdSelectModule,
    FormsModule,
    MdDialogModule
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
    FinalResultComponent,
    ResultComponent,
    ResultQuestionComponent,
    ResultAnswersComponent,
    ResultAnswerComponent,
    QuizCategoriesPageComponent,
    QuizCategoryComponent,
    QuizComponent,
    QuizCategorySelectorComponent,
    QuizListByCategoriesPageComponent,
    QuizModal,
    ResultModal,
    QuizzesComponent,
    QuizzesPageComponent,
    QuizDialogComponent
  ],
  providers: [
    QuizService
  ],
  entryComponents: [
    QuizModal,
    ResultModal,
    QuizDialogComponent
  ]
})
export class QuizModule {

}
