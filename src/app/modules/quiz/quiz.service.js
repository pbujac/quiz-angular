"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var Rx_1 = require("rxjs/Rx");
var QuizService = (function () {
    function QuizService(api) {
        this.api = api;
    }
    QuizService.prototype.getQuizCategories = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.api.get("categories").subscribe(function (result) {
                observer.next(result._embedded.categories);
            }, function (err) { return observer.error(err); });
        });
    };
    QuizService.prototype.getQuizById = function (id) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.api.get('quizzes/' + id).subscribe(function (result) {
                observer.next(result);
            }, function (err) { return observer.error(err); });
        });
    };
    QuizService.prototype.getQuizzeseByCategory = function (id) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.api.get('category/' + id + '/quizzes').subscribe(function (result) {
                observer.next(result._embedded.quizzes);
            }, function (err) { return observer.error(err); });
        });
    };
    QuizService.prototype.getUserResults = function (page, count) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.api.get("user/results?page=" + _this.incrementPage(page) + "&count=" + count).subscribe(function (result) {
                observer.next(result);
            }, function (err) { return observer.error(err); });
        });
    };
    QuizService.prototype.incrementPage = function (page) {
        return ++page;
    };
    QuizService.prototype.getQuizzes = function (page, count) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.api.get('quizzes?page=' + _this.incrementPage(page) + '&count=' + count).subscribe(function (result) {
                observer.next(result);
            }, function (err) { return observer.error(err); });
        });
    };
    return QuizService;
}());
QuizService = __decorate([
    core_1.Injectable()
], QuizService);
exports.QuizService = QuizService;
