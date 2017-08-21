import { QuizCategoryComponent } from "app/modules/quiz/components/quiz-category/quiz-category.component";
import { QuizCategoriesPageComponent } from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";
import { QuizListByCategoriesPageComponent } from "app/modules/quiz/pages/quiz-list/category/quiz-list-by-categories.page";
import { QuizComponent } from "app/modules/quiz/components/quiz/quiz.component";
import { QuizCategorySelectorComponent } from "app/modules/quiz/components/category-selector/quiz-category-selector";
import { QuizModal } from 'app/modules/quiz/components/quiz/modal/modal-quiz.component';
import { DialogComponent } from './pages/user-results/modal-result/modal-result.component';
import { ResultComponent } from './pages/user-results/result/result.component';
import { UserResultsPageComponent } from './pages/user-results/user-results.page';

import { Ng2OrderModule } from 'ng2-order-pipe';
import {MdRadioModule,MdCardModule, MdButtonModule, MdSelectModule, MdPaginatorModule} from '@angular/material';
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
        MdPaginatorModule,
        Ng2OrderModule,
        MdSelectModule,
        MdDialogModule
    ],
    declarations: [
        QuizCategoriesPageComponent,
        QuizCategoryComponent,
        QuizComponent,
        QuizCategorySelectorComponent,
        QuizListByCategoriesPageComponent,
        QuizModal,
        UserResultsPageComponent,
        DialogComponent,
        ResultComponent
    ],
    providers: [
        QuizService
    ],
    entryComponents: [
        QuizModal,
        DialogComponent
    ]
})
export class QuizModule {

}
