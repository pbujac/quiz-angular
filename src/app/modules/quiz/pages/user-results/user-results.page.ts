import { Component, Input, Output} from '@angular/core';
import { QuizService } from 'app/modules/quiz/quiz.service';

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

    constructor(private quizService: QuizService) {
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

}
