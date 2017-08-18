import { QuizCategoryComponent } from "app/modules/quiz/components/quiz-category/quiz-category.component";
import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
import { QuizListByCategoriesPageComponent } from "app/modules/quiz/pages/quiz-list/category/quiz-list-by-categories.page";
import { QuizComponent } from "app/modules/quiz/components/quiz/quiz.component";
import { QuizCategorySelectorComponent } from "app/modules/quiz/pages/quiz-list/category/selector/quiz-category-selector";
import { QuizObservable } from 'app/modules/quiz/components/quiz/modal/modal-quiz.component';

import {MdRadioModule,MdCardModule, MdButtonModule, MdSelectModule} from '@angular/material';
import { SharedModule } from "app/shared/shared.module";
import { QuizService } from './quiz.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "app/modules/quiz/quiz.routes";
import { NgModel, NgForm, FormsModule } from '@angular/forms';
import { MdDialogModule } from '@angular/material';
 
@NgModule({
    imports: [
        SharedModule,
        routing,
        MdRadioModule,
        MdCardModule,
        FormsModule,
        MdButtonModule,
        MdSelectModule,
        MdDialogModule
    ],
    declarations: [
        QuizCategoriesPageComponent,
        QuizCategoryComponent,
        QuizComponent,
        QuizCategorySelectorComponent,
        QuizListByCategoriesPageComponent,
        QuizObservable
    ],
    providers: [
        QuizService
    ],
    entryComponents: [
        QuizObservable
    ]

})
export class QuizModule {

}