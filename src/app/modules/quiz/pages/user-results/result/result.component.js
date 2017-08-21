"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_result_component_1 = require("../../../modals/modal-result/modal-result.component");
var ResultComponent = (function () {
    function ResultComponent(dialog) {
        this.dialog = dialog;
    }
    ResultComponent.prototype.openDialog = function () {
        this.dialog.open(modal_result_component_1.ResultModal, {
            data: this.result
        });
    };
    return ResultComponent;
}());
__decorate([
    core_1.Input()
], ResultComponent.prototype, "result", void 0);
ResultComponent = __decorate([
    core_1.Component({
        selector: 'result',
        templateUrl: './result.component.html',
        styleUrls: ['result.component.scss']
    })
], ResultComponent);
exports.ResultComponent = ResultComponent;
