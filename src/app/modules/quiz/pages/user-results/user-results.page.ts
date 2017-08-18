import { Component, Input, Output } from '@angular/core';
import { QuizService } from 'app/modules/quiz/quiz.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modal-component';

@Component({
    templateUrl: '/user-results.page.html',
    styleUrls: ['user-results.page.scss']
})
export class UserResultsPageComponent {

    results: any;
    length: number;

    @Input() pageSize = 10;
    @Input() pageSizeOptions = [2, 10, 20, 40, 100];
    @Input() pageIndex: number = 0;
    @Output() page: number;

    constructor(private quizService: QuizService, private modalService: NgbModal) {
        this.getResults(this.pageIndex, this.pageSize);
    }

    public getResults(page: number, count: number) {
        this.quizService.getUserResults(page, count).subscribe(
            result => {
                this.results = result._embedded.results;
                this.length = result.total;
            }
        );
    }

    public getResulstByPage(event) {
        this.getResults(event.pageIndex, event.pageSize);
    }

    open() {
        console.log('test');
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}

// @Component({
//   selector: 'ngbd-modal-component',
//   templateUrl: './modal-component.html'
// })
// export class NgbdModalComponent {
//   constructor(private modalService: NgbModal) {}

//   open() {
//     const modalRef = this.modalService.open(NgbdModalContent);
//     modalRef.componentInstance.name = 'World';
//   }
// }
