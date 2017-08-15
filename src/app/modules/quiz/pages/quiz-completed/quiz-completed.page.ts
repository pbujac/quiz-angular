
import { QuizService } from '../../quiz.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { UrlValidator } from "app/shared/validators";

@Component({
    templateUrl: "/quiz-completed.page.html",
    styleUrls: ['quiz-completed.scss']
})
export class QuizCompletedPageComponent {
    
   constructor() {
    }

}