import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCardModule, MdButtonModule} from '@angular/material';
import {routing} from "app/modules/home/home.routes";
import {HomePageComponent} from "./pages/home.page";
import {QuizCategoriesPageComponent} from "app/modules/quiz/pages/quiz-categories/quiz-categories.page";

@NgModule({
  imports: [
    CommonModule,
    routing,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomeModule {
}
