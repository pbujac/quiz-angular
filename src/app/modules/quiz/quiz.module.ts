import { AnswerComponent } from './components/answers/answer/answer.component';
import { AnswersComponent } from './components/answers/answers.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuizSolvePageComponent } from './pages/quiz-solve/quiz-solve.page';
import { QuizService } from './quiz.service';
import { NgModule } from '@angular/core';
import { routing } from "app/modules/quiz/quiz.routes";

import { MdRadioModule, MdCardModule, MdButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from 'ng2-flex-layout';

import { QuizCategoryComponent } from "app/modules/quiz/components/quiz-category/quiz-category.component";
import { QuestionComponent } from "app/modules/quiz/components/questions/question/question.component";
import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
import { QuizCreatePageComponent } from "app/modules/quiz/pages/quiz-create/quiz-create.page";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        routing,
        MdRadioModule,
        FormsModule,
        MdCardModule,
        MdButtonModule,
        LayoutModule,
    ],
    declarations: [
        QuizCategoriesPageComponent,
        QuizCreatePageComponent,
        QuizCategoryComponent,
        QuizSolvePageComponent,
        QuestionsComponent,
        QuestionComponent,
        AnswersComponent,
        AnswerComponent
    ],
    providers: [
        QuizService
    ]
})
export class QuizModule {

}