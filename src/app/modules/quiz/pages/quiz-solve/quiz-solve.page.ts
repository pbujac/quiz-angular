import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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

  /**
   * @param {ActivatedRoute} route
   * @param {QuizService} quizService
   */
  constructor(private route: ActivatedRoute,
              private quizService: QuizService) {

    this.route.params.subscribe(params => {
      let quizId = params['id'];
      this.loadQuiz(quizId);
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
      }
    );
  }

}
