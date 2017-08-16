// import { AnswerComponent } from './components/answers/answer/answer.component';
// import { AnswersComponent } from './components/answers/answers.component';
// import { QuestionsComponent } from './components/questions/questions.component';
// import { QuizSolvePageComponent } from './pages/quiz-solve/quiz-solve.page';
import { QuizCategoryComponent } from "app/modules/quiz/components/quiz-category/quiz-category.component";
// import { QuestionComponent } from "app/modules/quiz/components/questions/question/question.component";
import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
// import { QuizCreatePageComponent } from "app/modules/quiz/pages/quiz-create/quiz-create.page";
import { QuizListByCategoriesPageComponent } from "app/modules/quiz/pages/quiz-list/category/quiz-list-by-categories.page";
import { QuizComponent } from "app/modules/quiz/components/quiz/quiz.component";
import { QuizCategorySelectorComponent } from "app/modules/quiz/pages/quiz-list/category/selector/quiz-category-selector";

import {MdRadioModule,MdCardModule, MdButtonModule, MdSelectModule} from '@angular/material';
import { SharedModule } from "app/shared/shared.module";
import { QuizService } from './quiz.service';
import { NgModule } from '@angular/core';
import { routing } from "app/modules/quiz/quiz.routes";
import { NgModel, NgForm, FormsModule } from '@angular/forms';
 
 
@NgModule({
    imports: [
        SharedModule,
        routing,
        MdRadioModule,
        MdCardModule,
        FormsModule,
        MdButtonModule,
        MdSelectModule
    ],
    declarations: [
        QuizCategoriesPageComponent,
        // QuizCreatePageComponent,
        QuizCategoryComponent,
        // QuizSolvePageComponent,
        // QuestionsComponent,
        // QuestionComponent,
        // AnswersComponent,
        // AnswerComponent,
        QuizComponent,
        QuizCategorySelectorComponent,
        QuizListByCategoriesPageComponent
    ],
    providers: [
        QuizService
    ]
})
export class QuizModule {

}