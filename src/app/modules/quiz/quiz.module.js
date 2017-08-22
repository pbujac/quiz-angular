"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var quiz_category_component_1 = require("app/modules/quiz/components/quiz-category/quiz-category.component");
var quiz_categories_page_1 = require("app/modules/quiz/pages/quiz-categories/quiz-categories.page");
var quiz_list_by_categories_page_1 = require("app/modules/quiz/pages/quiz-list/by-category/quiz-list-by-categories.page");
var quiz_component_1 = require("app/modules/quiz/components/quiz/quiz.component");
var quiz_category_selector_1 = require("app/modules/quiz/components/category-selector/quiz-category-selector");
var modal_quiz_component_1 = require("app/modules/quiz/modals/modal-quiz/modal-quiz.component");
var modal_result_component_1 = require("app/modules/quiz/modals/modal-result/modal-result.component");
var result_component_1 = require("./pages/user-results/result/result.component");
var user_results_page_1 = require("./pages/user-results/user-results.page");
var ng2_order_pipe_1 = require("ng2-order-pipe");
var material_1 = require("@angular/material");
var shared_module_1 = require("app/shared/shared.module");
var quiz_service_1 = require("./quiz.service");
var core_1 = require("@angular/core");
var quiz_routes_1 = require("app/modules/quiz/quiz.routes");
var forms_1 = require("@angular/forms");
var material_2 = require("@angular/material");
var QuizModule = (function () {
    function QuizModule() {
    }
    return QuizModule;
}());
QuizModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            quiz_routes_1.routing,
            material_1.MdRadioModule,
            material_1.MdCardModule,
            forms_1.FormsModule,
            material_1.MdButtonModule,
            material_1.MdPaginatorModule,
            ng2_order_pipe_1.Ng2OrderModule,
            material_1.MdSelectModule,
            material_2.MdDialogModule
        ],
        declarations: [
            quiz_categories_page_1.QuizCategoriesPageComponent,
            quiz_category_component_1.QuizCategoryComponent,
            quiz_component_1.QuizComponent,
            quiz_category_selector_1.QuizCategorySelectorComponent,
            quiz_list_by_categories_page_1.QuizListByCategoriesPageComponent,
            modal_quiz_component_1.QuizModal,
            user_results_page_1.UserResultsPageComponent,
            modal_result_component_1.ResultModal,
            result_component_1.ResultComponent
        ],
        providers: [
            quiz_service_1.QuizService
        ],
        entryComponents: [
            modal_quiz_component_1.QuizModal,
            modal_result_component_1.ResultModal
        ]
    })
], QuizModule);
exports.QuizModule = QuizModule;
