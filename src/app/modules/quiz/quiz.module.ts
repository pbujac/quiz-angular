import {NgModule} from '@angular/core';

import { routing } from "app/modules/quiz/quiz.routes";

import { QuizCategoryComponent } from "app/modules/quiz/components/quiz-category/quiz-category.component";
import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
import { QuizCreatePageComponent } from "app/modules/quiz/pages/quiz-create/quiz-create.page";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        QuizCategoriesPageComponent,
        QuizCreatePageComponent,
        QuizCategoryComponent
    ],
    exports: [
        
    ]
})
export class QuizModule {
    
}