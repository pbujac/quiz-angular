import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Quiz} from "../../model/quiz.model";
import {QuizService} from "../../quiz.service";
import {PageModel} from "../../model/page.model";

@Component({
  selector: 'app-quiz-solve',
  templateUrl: './quiz-solve.page.html',
  styleUrls: ['./quiz-solve.scss']
})
export class QuizSolveComponent {

  protected quiz: any;
  protected page: PageModel;
  protected reviewStatus: boolean;

  /**
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {QuizService} quizService
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private quizService: QuizService) {

    this.reviewStatus = false;

    this.route.params.subscribe(params => {

      this.loadQuiz(params['id']);
    });

  }

  /**
   * @param {number} quizId
   */
  public loadQuiz(quizId: number) {

    this.quiz = this.quizService.getQuizById(quizId).subscribe(
      result => {
        this.quiz = new Quiz(result);
        this.page = new PageModel(this.quiz.questions.length);
      },
      err => {
        this.router.navigate(['home']);
      }
    );
  }

  /**
   * @param {number} index
   */
  public goToQuestionPage(index: number) {
    this.reviewStatus = false;
    this.page.index = index;
  }

  /**
   * @param {boolean} status
   */
  public onChangeReviewStatus(status: boolean) {
    this.reviewStatus = status;
  }

  /**
   * @param {boolean} status
   */
  public onCancel(status: boolean) {

    if (status) {
      this.quiz = null;
      this.router.navigate(['home']);
    }
  }

}
