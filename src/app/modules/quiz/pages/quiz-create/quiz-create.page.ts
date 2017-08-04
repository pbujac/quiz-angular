import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { UrlValidator } from "app/shared/validators";

@Component({
    templateUrl: "/quiz-create.page.html"
})
export class QuizCreatePageComponent {

    quizForm: FormGroup;

    constructor() {

       this.quizForm = new FormGroup ({
            name: new FormControl('', Validators.required),
            description: new FormControl('', [Validators.required,Validators.minLength(5)]),
            imageUrl: new FormControl('', UrlValidator)

        });

    }

    onSubmit(){
        console.log('On submit');
    }
 }