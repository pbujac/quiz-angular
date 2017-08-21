"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserResultsPageComponent = (function () {
    function UserResultsPageComponent(quizService) {
        this.quizService = quizService;
        this.pageSize = 10;
        this.pageSizeOptions = [2, 10, 20, 40, 100];
        this.pageIndex = 0;
        this.getResults(this.pageIndex, this.pageSize);
    }
    UserResultsPageComponent.prototype.getResults = function (page, count) {
        var _this = this;
        this.quizService.getUserResults(page, count).subscribe(function (result) {
            _this.results = result._embedded.results;
            _this.length = result.total;
        });
    };
    UserResultsPageComponent.prototype.getResulstByPage = function (event) {
        this.getResults(event.pageIndex, event.pageSize);
    };
    return UserResultsPageComponent;
}());
__decorate([
    core_1.Input()
], UserResultsPageComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input()
], UserResultsPageComponent.prototype, "pageSizeOptions", void 0);
__decorate([
    core_1.Input()
], UserResultsPageComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Output()
], UserResultsPageComponent.prototype, "page", void 0);
UserResultsPageComponent = __decorate([
    core_1.Component({
        templateUrl: '/user-results.page.html',
        styleUrls: ['user-results.page.scss']
    })
], UserResultsPageComponent);
exports.UserResultsPageComponent = UserResultsPageComponent;
